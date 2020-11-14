import React, { useEffect, useState } from 'react';
import { useStorage } from 'lib/hooks';

import NotificationText from 'components/NotificationText/NotificationText';
import ShortcutKeys from 'components/ShortcutKeys/ShortcutKeys';
import Icon from 'components/Icon/Icon';

import './Shortcut.scss';
import config from 'config';
import ActionButtons from 'components/ActionButtons/ActionButtons';

const Shortcut = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(0);

  const storage = useStorage();

  const handleSkip = () => {
    setIndex(prev => {
      storage.set('shortcutIndex', (prev + 1).toString());
      return (prev + 1) % config.macShortcuts.length;
    });
  };

  const handleDismiss = () => {
    setDismissed(true);
    // storage.set('show', true);
  };

  useEffect(() => {
    const init = async () => {
      const [shortcutIndex, prevDay] = await Promise.all([
        storage.get('shortcutIndex'),
        storage.get('prevDay'),
      ]);

      setIndex(Number(shortcutIndex));

      const todaysDate = new Date().getDate().toString();
      if (!prevDay || !shortcutIndex) {
        setIndex(0);
        storage.set('shortcutIndex', '0');
        storage.set('prevDay', todaysDate);
      } else if (prevDay !== todaysDate) {
        setIndex((Number(shortcutIndex) + 1) % config.macShortcuts.length);
        setDismissed(false);
        storage.set('shortcutIndex', shortcutIndex + 1);
        storage.set('prevDay', todaysDate);
      }
      // setDismissed(!!(await storage.get('show')));f
    };

    init();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (dismissed) {
      const interval = setInterval(() => {
        if (!window.location.pathname.startsWith('/file/')) {
          setDismissed(false);
          setShow(false);
          clearInterval(interval);
        }
      }, 1e4);
      return () => clearInterval(interval);
    } else if (!show) {
      const interval = setInterval(() => {
        if (window.location.pathname.startsWith('/file/')) {
          setShow(true);
          clearInterval(interval);
        }
      }, 1e3);
      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        if (!window.location.pathname.startsWith('/file/')) {
          setShow(false);
          clearInterval(interval);
        }
      }, 1e4);
      return () => clearInterval(interval);
    }
  }, [show, dismissed]);

  if (!show || dismissed) return <></>;

  return (
    <div
      className="Shortcut"
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon />
      <NotificationText label={config.macShortcuts[index].label} />
      <ShortcutKeys keys={config.macShortcuts[index].keys} />
      <ActionButtons
        className={hovered ? 'fade-in' : 'fade-out'}
        onSkip={handleSkip}
        onDismiss={handleDismiss}
      />
    </div>
  );
};

export default Shortcut;

import React, { useEffect, useState } from 'react';
import { useStorage } from 'lib/hooks';

import NotificationText from 'components/NotificationText/NotificationText';
import ShortcutKeys from 'components/ShortcutKeys/ShortcutKeys';
import Icon from 'components/Icon/Icon';

import './Shortcut.scss';
import config from 'config';
import ActionButtons from 'components/ActionButtons/ActionButtons';

const Shortcut = () => {
  const [dismissed, setDismissed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(0);

  const storage = useStorage();

  const handleSkip = () => {
    setIndex(prev => {
      storage.set('shortcutIndex', prev + 1);
      return (prev + 1) % config.macShortcuts.length;
    });
  };

  const handleDismiss = () => {
    setDismissed(true);
    // storage.set('dismissed', true);
  };

  useEffect(() => {
    const init = async () => {
      const [shortcutIndex, prevDay] = await Promise.all([
        storage.get('shortcutIndex'),
        storage.get('prevDay'),
      ]);

      setIndex(shortcutIndex);

      if (!prevDay || !shortcutIndex) {
        setIndex(0);
        storage.set('shortcutIndex', 0);
        storage.set('prevDay', new Date().getDate);
      } else if (prevDay !== new Date().getDate()) {
        setIndex((shortcutIndex + 1) % config.macShortcuts.length);
        storage.set('shortcutIndex', shortcutIndex + 1);
        storage.set('prevDay', new Date().getDate());
      }
      // setDismissed(!!(await storage.get('dismissed')));f
    };

    init();

    // eslint-disable-next-line
  }, []);

  if (dismissed) return <></>;

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

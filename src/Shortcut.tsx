import React, { useEffect, useState } from 'react';
import { useStorage } from 'lib/hooks';

import './Shortcut.scss';
import config from 'config';

const Shortcut = () => {
  const [dismissed, setDismissed] = useState(false);
  const storage = useStorage();

  const handleDismiss = () => {
    setDismissed(true);
  };

  // useEffect(() => {
  //   const initDismissed = async () => {
  //     setDismissed(!!(await storage.get('dismissed')));
  //   };

  //   initDismissed();
  // }, [storage]);

  if (dismissed) return <></>;

  return (
    <div className="Shortcut">
      <div className="Icon"></div>
      <div className="NotificationText">
        <p>Today's Shortcut</p>
        <p className="UI11">{config.macShortcuts[7].label}</p>
      </div>
      <div className="ShortcutKeys">
        <div className="ShortcutKey">cmd</div>
        and
        <div className="ShortcutKey">opt</div>
      </div>
      <div className="ActionButtons">
        <button className="ActionButton">Skip</button>
        <button className="ActionButton" onClick={handleDismiss}>
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default Shortcut;

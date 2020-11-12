import React from 'react';

import './NotificationText.scss';

type Props = {
  label: string;
};

const NotificationText = ({ label }: Props) => {
  return (
    <div className="NotificationText">
      <p>Today's Shortcut</p>
      <p className="UI11-Neg subtext">{label.split('\n')[0]}</p>
    </div>
  );
};

export default NotificationText;

import React from 'react';

import './ActionButtons.scss';

type Props = {
  className: string;
  onDismiss: () => void;
  onSkip: () => void;
};

const ActionButtons = ({
  className,
  onDismiss: handleDismiss,
  onSkip: handleSkip,
}: Props) => {
  return (
    <div className={'ActionButtons ' + className}>
      <button onClick={handleSkip}>Skip</button>
      <button onClick={handleDismiss}>Dismiss</button>
    </div>
  );
};

export default ActionButtons;

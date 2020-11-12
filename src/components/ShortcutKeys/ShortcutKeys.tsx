import React from 'react';

import './ShortcutKeys.scss';

type Props = {
  keys: string;
};

const ShortcutKeys = ({ keys }: Props) => {
  return (
    <div className="ShortcutKeys">
      {keys.split('\n').map(k =>
        k === 'and' ? (
          <span key={k} className="connectingWord">
            &
          </span>
        ) : (
          <div key={k} className="key">
            {k}
          </div>
        )
      )}
    </div>
  );
};

export default ShortcutKeys;

import React from 'react';
import ReactDOM from 'react-dom';
import Shortcut from './Shortcut';

import './index.scss';
import config from 'config';

const root = document.createElement('div');
root.id = config.name + '-root';
document.body.prepend(root);

ReactDOM.render(<Shortcut />, root);

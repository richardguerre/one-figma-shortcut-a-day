import React from 'react';
import ReactDOM from 'react-dom';
import Shortcut from './Shortcut';

import './index.scss';
import config from 'config';

const rootName = config.name + '-root';

const root = document.createElement('div');
root.id = rootName;
document.body.appendChild(root);

ReactDOM.render(<Shortcut />, document.getElementById(rootName));

import React from 'react';
import ReactDOM from 'react-dom';
import Shortcut from './Shortcut';

import './index.scss';
import config from 'config';

const root = document.createElement('div');
root.id = config.name + '-root';

const figmaContainer = document.getElementsByClassName(
  config.figmaContainerName
)[0];
if (figmaContainer) {
  figmaContainer.prepend(root);
  ReactDOM.render(<Shortcut />, root);
} else {
  ReactDOM.render(<Shortcut />, document.getElementById('root'));
}

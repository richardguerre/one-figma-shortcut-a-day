import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Shortcut from './Shortcut';

const root = document.createElement('div');
root.id = 'one-figma-shortcut-a-day-root';
document.body.appendChild(root);

ReactDOM.render(
  <Shortcut />,
  document.getElementById('one-figma-shortcut-a-day-root')
);

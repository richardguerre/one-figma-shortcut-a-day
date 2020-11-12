import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

const root = document.createElement('div');
root.id = 'one-figma-shortcut-a-day-root';
document.body.appendChild(root);

ReactDOM.render(
  <App />,
  document.getElementById('one-figma-shortcut-a-day-root')
);

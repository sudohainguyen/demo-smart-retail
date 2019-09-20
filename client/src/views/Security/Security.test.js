import React from 'react';
import ReactDOM from 'react-dom';
import Security from './Security';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Security />, div);
  ReactDOM.unmountComponentAtNode(div);
});
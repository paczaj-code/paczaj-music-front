import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('should be renedered', () => {
  render(<App />);
  const appDiv = document.querySelector('.App');
  expect(appDiv).toBeDefined();
});

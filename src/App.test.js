import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test("renders learn react link", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Landing page/i);
    expect(linkElement).toBeInTheDocument();
  });
});
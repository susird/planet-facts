import { render, screen } from '@testing-library/react';
import App from './App';

test('Should renders Home link', () => {
  render(<App />);
  const homeLink = screen.getByText(/the planets/i);
  expect(homeLink).toBeInTheDocument();
  const earthLink = screen.getByText(/earth/i);
  expect(earthLink).toBeInTheDocument();
});

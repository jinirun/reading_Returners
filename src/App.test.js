import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my reading list link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Reading List/i);
  expect(linkElement).toBeInTheDocument();
});

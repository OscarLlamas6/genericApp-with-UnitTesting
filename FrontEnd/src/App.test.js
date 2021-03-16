import { render, screen } from '@testing-library/react';
import App from './App';

test('Exisite mi boton', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mi boton/i);
  expect(linkElement).toBeInTheDocument();
});

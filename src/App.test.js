import { render, screen } from '@testing-library/react';
import Dcard from 'src/Dcard/App.js';

test('renders learn react link', () => {
  render(<Dcard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

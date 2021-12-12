import { render, screen } from '@testing-library/react';
import App from './App';
import Note from './Note';
import Notes from './Notes';
import Pinned from './Pinned';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("rendering notes with false pins by default", () => {
  
})

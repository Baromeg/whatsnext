import { render, screen } from '@testing-library/react';
import { getQueriesForElement} from '@testing-library/jest-dom'
import App from './App';

test('renders the correct content', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

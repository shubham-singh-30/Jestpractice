import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {element} = render(<App />);
  
  expect(element).toMatchSnapshot();
});

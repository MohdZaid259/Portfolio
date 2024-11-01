import { render, screen, cleanup } from '@testing-library/react';
import Home from '../Home.jsx'

test('should render Home component', () => { 
  render(<Home/>)
  const homeElement=screen.getByTestId('home-1')
  expect(homeElement).toBeInTheDocument()
})
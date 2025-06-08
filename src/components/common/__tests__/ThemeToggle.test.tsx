import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '../ThemeToggle';

// Mock the useDarkMode hook
jest.mock('../../../hooks/useDarkMode', () => ({
  useDarkMode: () => {
    const [theme, setTheme] = React.useState('light');
    return [theme, setTheme];
  },
}));

describe('ThemeToggle', () => {
  it('renders without crashing', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('toggles theme when clicked', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    
    // Initial state should be light
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode');
    
    // Click to toggle
    fireEvent.click(button);
    
    // Should now be dark
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode');
  });
});

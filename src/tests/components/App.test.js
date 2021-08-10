import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import App from '../../components/App';

test('renders App', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/Cool Dinners!/i);
  expect(linkElement).toBeInTheDocument();
});

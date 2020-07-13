import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders static content', () => {
  const { getByText } = render(<App />);
  const title = getByText(/harvard art museums/i);
  const subtitle = getByText(
    'Fogg Museum / Busch-Reisinger Museum / Arthur M. Sackler Museum'
  );
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
});

test('navigation links', () => {
  const { getByText } = render(<App />);

  // navigate to about page
  const aboutLink = getByText(/about/i);
  userEvent.click(aboutLink);
  expect(getByText(/About the Museums/i)).toBeInTheDocument();

  // navigate back to home page
  const homeLink = getByText(/^home$/i);
  userEvent.click(homeLink);
  expect(getByText(/Show Featured Only/i)).toBeInTheDocument();
});

test('filter by featured', () => {
  const { getAllByText, getByText } = render(<App />);

  expect(getAllByText(/Object Number/i).length).toBe(2);

  const showFeaturedOnlyButton = getByText(/Show Featured Only/i);

  userEvent.click(showFeaturedOnlyButton);

  expect(getAllByText(/Object Number/i).length).toBe(1);
});

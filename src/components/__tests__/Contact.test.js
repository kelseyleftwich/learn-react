import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../Contact';
import userEvent from '@testing-library/user-event';

// replace this with computeAccessibleDescription in dom-accessibility-api when it's available
const getAccessibleDescription = (element) => {
  const describedBy = element.getAttribute('aria-describedby');
  const descriptionElement = document.getElementById(describedBy);
  if (!descriptionElement) {
    throw new Error('Element is not described');
  }
  return descriptionElement.textContent;
};

test('Contact form submission', () => {
  const { getByLabelText, getByText } = render(<Contact />);
  const nameInput = getByLabelText(/name/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);

  userEvent.type(nameInput, 'John Doe');
  userEvent.type(emailInput, 'johndoe@gmail.com');
  userEvent.type(messageInput, 'I really like the museum!');

  const submitButton = getByText('Submit');
  userEvent.click(submitButton);

  expect(getByText(/Message sent!/i)).toBeInTheDocument();
});

test('Required fields', () => {
  const { getByLabelText, getByText } = render(<Contact />);
  const nameInput = getByLabelText(/name/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);

  userEvent.type(nameInput, 'John Doe');
  userEvent.type(emailInput, 'johndoe@gmail.com');
  // Don't supply message at first

  const submitButton = getByText('Submit');
  userEvent.click(submitButton);

  // expect message input to be described as required
  expect(getAccessibleDescription(messageInput)).toBe('Required');

  // add text to message input textarea
  userEvent.type(messageInput, 'I really like the museum!');

  // remove value from name input
  userEvent.type(nameInput, '', { allAtOnce: true });
  userEvent.click(submitButton);

  // expect name input to be described as required
  expect(getAccessibleDescription(nameInput)).toBe('Required');

  // add name value back in
  userEvent.type(nameInput, 'John Doe');

  // expect successful submit
  userEvent.click(submitButton);
  expect(getByText(/Message sent!/i)).toBeInTheDocument();
});

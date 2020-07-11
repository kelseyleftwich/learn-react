import React, { useState } from 'react';
import TextField from './common/TextField';

const style = {
  display: 'grid',
  gridTemplateColumns: 'max-content 300px',
  gridGap: 16,
  alignItems: 'flex-start',
};

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const handleTextFieldChange = ({ target: { name, value } }) => {
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const getFormIsValid = () => {
    const invalidFields = Object.keys(formValues).filter(
      (key) => !formValues[key]
    );
    const errors = invalidFields.reduce((prev, key) => {
      return {
        ...prev,
        [key]: 'Required',
      };
    }, {});

    /* TODO: email validation */

    setFormErrors((prev) => ({
      ...prev,
      ...errors,
    }));
    return invalidFields.length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (getFormIsValid()) {
      // TODO: actually do something with the form data
      setSubmitted(true);
    }
  };

  return (
    <>
      <h2>Contact Us</h2>
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <div style={style}>
            <TextField
              label="Name"
              id="name"
              value={formValues.name}
              onChange={handleTextFieldChange}
              error={formErrors.name}
            />
            <TextField
              label="Email"
              id="email"
              value={formValues.email}
              onChange={handleTextFieldChange}
              error={formErrors.email}
            />
            <TextField
              label="Message"
              id="message"
              value={formValues.message}
              onChange={handleTextFieldChange}
              area
              error={formErrors.message}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {submitted && (
        <p>
          <mark>Message sent!</mark>
        </p>
      )}
    </>
  );
};

export default Contact;

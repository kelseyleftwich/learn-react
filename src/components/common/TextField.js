import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ id, label, value, onChange, area, error }) => {
  const ariaDescribedByAttribute = {
    'aria-describedby': `${id}-description`,
  };

  // this is for screenreaders
  const ariaLiveAttribute = {
    'aria-live': 'assertive',
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'right',
        }}
      >
        {area ? (
          <textarea
            type="text"
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            {...(error ? ariaDescribedByAttribute : {})}
            {...(error ? ariaLiveAttribute : {})}
          />
        ) : (
          <input
            type="text"
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            {...(error ? ariaDescribedByAttribute : {})}
            {...(error ? ariaLiveAttribute : {})}
          />
        )}
        {error && (
          <small
            id={`${id}-description`}
            style={{ color: 'red' }}
            aria-live="assertive"
          >
            {error}
          </small>
        )}
      </div>
    </>
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  area: PropTypes.bool,
};

TextField.defaultProps = {
  area: false,
};

export default TextField;

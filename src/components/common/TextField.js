import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ id, label, value, onChange, area, error }) => {
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
          />
        ) : (
          <input
            type="text"
            id={id}
            name={id}
            value={value}
            onChange={onChange}
          />
        )}
        {error && <small style={{ color: 'red' }}>{error}</small>}
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

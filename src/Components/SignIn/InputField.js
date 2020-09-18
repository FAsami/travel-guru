import React from 'react';

function InputField({ name, label, type, error, handleChange }) {
  return (
    <div className='group'>
      <input
        required
        type={type}
        name={name}
        onChange={handleChange}
        className='input-field'
      />
      <span className='highlight'></span>
      <span className='bar'></span>
      <label className='input-label'>{label}</label>
      <small className='text-danger'>{error}</small>
    </div>
  );
}

export default InputField;

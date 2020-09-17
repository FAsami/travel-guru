import React from 'react';
import './inputFieldStyle.css';
function InputField({ label, value, handleChange }) {
  return (
    <div class='group'>
      <input required value={value} onChange={handleChange} />
      <span class='highlight'></span>
      <span class='bar'></span>
      <label>{label}</label>
    </div>
  );
}

export default InputField;

InputField.defaultProps = {
  type: 'text',
};

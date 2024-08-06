import { useState } from 'react';

export const SingleSelect = ({ title, options, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    onChange(newValue); // enviar al padre
  };

  const renderOptions = (options) => {
    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  return (
    <div>
      <h2>{title}</h2>
      <select value={value} onChange={handleChange}>
        {renderOptions(options)}
      </select>
    </div>
  );
};

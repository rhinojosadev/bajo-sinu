import { useState } from "react";

export const SingleSelect = ({ options, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    onChange(newValue); // enviar al padre
  };

  return (
    <div>
      <h2>Single Select</h2>
      <select value={value} onChange={handleChange}>
        <option value="" disabled>Select an option</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
    </div>
  );
};

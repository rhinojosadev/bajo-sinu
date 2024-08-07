import { useState } from "react";
import Select from 'react-select';

export const MultiSelect = ({ title, options, onChange }) => {
  const [values, setValues] = useState([]);

  const handleChange = (selectedOption) => {
    setValues(selectedOption);

    const selectedValues = selectedOption.map((option) => option.label);
    onChange(selectedValues); // enviar al padre
  };

  const optionsFormatted = options.map((option) => ({
    value: option,
    label: option,
  }));

  return (
    <div>
      <h2>{title}</h2>
      <Select
        isMulti
        defaultValue={optionsFormatted[0]}
        className="basic-multi-select"
        classNamePrefix="select"
        options={optionsFormatted}
        onChange={handleChange}
      />
    </div>
  );
};

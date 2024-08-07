import { useState } from 'react';
import Select from 'react-select';

export const SingleSelect = ({ title, options, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (selectedOption) => {
    setValue(selectedOption);
    onChange(selectedOption.label); // enviar al padre
  };

  const optionsFormatted = options.map((option) => ({
    value: option,
    label: option,
  }));

  return (
    <div>
      <h2>{title}</h2>
      <Select
        className='basic-single'
        classNamePrefix='select'
        defaultValue={optionsFormatted[0]}
        isClearable={true}
        isSearchable={true}
        options={optionsFormatted}
        onChange={handleChange}
      />
    </div>
  );
};

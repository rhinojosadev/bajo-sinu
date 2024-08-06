import { useState } from "react";

export const MultiSelect = ({ title, options, onChange }) => {
  const [values, setValues] = useState([]);

  const handleChange = (event) => {
    const options = event.target.options;
    const selectedValues = [];
    for (const option of options) {
      if (option.selected) {
        selectedValues.push(option.value);
      }
    }
    setValues(selectedValues);

    onChange(selectedValues); // enviar al padre
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
      <select multiple={true} value={values} onChange={handleChange}>
        {renderOptions(options)}
      </select>
    </div>
  );
};

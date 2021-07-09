import React from "react";

function InputWithLabel({ id, spanText, propsLabel, propsInput }) {
  return (
    <label htmlFor={id} {...propsLabel}>
      <input {...propsInput} />
      {spanText && <span>{spanText}</span>}
    </label>
  );
}

export default InputWithLabel;

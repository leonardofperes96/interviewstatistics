import React from "react";

const FormInput = ({ type, name, labelText, onChange, value }) => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>{name}</label>
      <input type={type} name={name} onChange={onChange} id={name} value={value} className="form-input" />
    </div>
  );
};

export default FormInput;

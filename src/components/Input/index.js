// @flow

import React from 'react'
import './index.css'

type InputProps = {
  name: string,
  label: string,
  type: string,
  value: string,
  isEnabled: boolean,
  onInputChange: Function,
};

// value = '' as initial value, because null/undefined will make the component uncontrolled
const Input = ({name, label, type = 'text', value = '', isEnabled = true, onInputChange}: InputProps) => (
  <React.Fragment>
    <label className="Label" htmlFor={name}>{label}</label>
    <input className="Input"
      name={name}
      type={type}
      value={value}
      disabled={!isEnabled}
      onChange={onInputChange} />
  </React.Fragment>
);

export default Input

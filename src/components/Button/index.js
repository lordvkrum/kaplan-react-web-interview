// @flow

import React from 'react'
import './index.css'

type ButtonProps = {
  label: string,
  isEnabled: boolean,
  onButtonClick: Function,
};

class Button extends React.PureComponent<ButtonProps> {
  static defaultProps = {
    label: 'Log In',
    isEnabled: false,
  };

  render() {
    const { label, isEnabled, onButtonClick } = this.props;

    return <button className="Button"
      disabled={!isEnabled}
      onClick={onButtonClick}>{label}</button>;
  }
}

export default Button

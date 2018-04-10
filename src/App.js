import React from 'react'
import { logIn } from './api'
import Input from './components/Input'
import Button from './components/Button'
import ErrorList from './components/ErrorList'
import './App.css'

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef(); /* ref for testing */
    this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      errors: [],
      email: '',
      password: '',
      isFetching: false
    };
  }

  handleEmailInputChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordInputChange(e) {
    this.setState({password: e.target.value});
  }

  handleButtonClick() {
    const { email, password } = this.state;
    this.setState({ isFetching: true });
    logIn(email, password)
      .then(() => {/* successful logIn logic */})
      .catch((errors) => this.setState({ errors }))
      .then(() => this.setState({ isFetching: false }));
  }

  render() {
    const { errors, email, password, isFetching } = this.state;
    // ref: http://emailregex.com/
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const buttonLabel = isFetching ? 'Loading...' : 'Log In';
    const isButtonEnabled = email.length > 0 && password.length > 0 && emailRegExp.test(email) && !isFetching;

    return (
      <form className="App">
        <ErrorList errors={errors} />
        <Input
          name="email"
          label="Email"
          value={email}
          isEnabled={!isFetching}
          onInputChange={this.handleEmailInputChange} />
        <Input
          name="password"
          label="Password"
          type="password"
          value={password}
          isEnabled={!isFetching}
          onInputChange={this.handlePasswordInputChange} />
        <Button
          ref={this.buttonRef}
          label={buttonLabel}
          isEnabled={isButtonEnabled}
          onButtonClick={this.handleButtonClick} />
      </form>
    );
  }
}

export default App

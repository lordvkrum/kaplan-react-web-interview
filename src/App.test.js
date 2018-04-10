import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect(ReactDOM.unmountComponentAtNode(div)).toBe(true);
});

it('renders button with initial props', () => {
  const div = document.createElement('div');
  const app = ReactDOM.render(<App />, div);
  expect(app.buttonRef.current.props.label).toBe('Log In');
  expect(app.buttonRef.current.props.isEnabled).toBe(false);
  expect(ReactDOM.unmountComponentAtNode(div)).toBe(true);
});

it('renders button as enabled when email and password provided', () => {
  const div = document.createElement('div');
  const app = ReactDOM.render(<App />, div);
  app.setState({
    email: 'test@test.com',
    password: 'test'
  });
  expect(app.buttonRef.current.props.label).toBe('Log In');
  expect(app.buttonRef.current.props.isEnabled).toBe(true);
  expect(ReactDOM.unmountComponentAtNode(div)).toBe(true);
});

it('renders button as disabled when invalid email provided', () => {
  const div = document.createElement('div');
  const app = ReactDOM.render(<App />, div);
  app.setState({
    email: 'test',
    password: 'test'
  });
  expect(app.buttonRef.current.props.label).toBe('Log In');
  expect(app.buttonRef.current.props.isEnabled).toBe(false);
  expect(ReactDOM.unmountComponentAtNode(div)).toBe(true);
});

it('renders button as disabled and with is loading message when fetching data', () => {
  const div = document.createElement('div');
  const app = ReactDOM.render(<App />, div);
  app.setState({
    isFetching: true
  });
  expect(app.buttonRef.current.props.label).toBe('Loading...');
  expect(app.buttonRef.current.props.isEnabled).toBe(false);
  expect(ReactDOM.unmountComponentAtNode(div)).toBe(true);
});

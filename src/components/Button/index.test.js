import React from 'react';
import ReactDOM from 'react-dom';
import Button from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
  expect(ReactDOM.unmountComponentAtNode(div)).toBe(true);
});

it('renders with default props', () => {
  const div = document.createElement('div');
  const button = ReactDOM.render(<Button />, div);
  expect(button.props.label).toBe('Log In');
  expect(button.props.isEnabled).toBe(false);
  expect(ReactDOM.unmountComponentAtNode(div)).toBe(true);
});

it('renders with sent props', () => {
  const div = document.createElement('div');
  const button = ReactDOM.render(<Button label="Test" isEnabled/>, div);
  expect(button.props.label).toBe('Test');
  expect(button.props.isEnabled).toBe(true);
  expect(ReactDOM.unmountComponentAtNode(div)).toBe(true);
});

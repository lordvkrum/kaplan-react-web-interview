// @flow

import React from 'react'
import './index.css'

type ErrorListProps = {
  errors: Array,
};

const Input = ({errors = []}: ErrorListProps) => (
  <React.Fragment>
    {errors.length > 0 && 
      <label htmlFor="errorList" className="ErrorList">Errors:</label>
    }
    {errors.length > 0 && 
      <ul name="errorList" className="ErrorList">
      {(
        errors.map((error) => (
          <li key={error}>{error}</li>
        ))
      )}
      </ul>
    }
  </React.Fragment>
);

export default Input

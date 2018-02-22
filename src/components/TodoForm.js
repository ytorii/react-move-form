import React from 'react';
import { Field } from 'redux-form';

export default props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Todo</label>
        <div>
          <Field
            name="todo"
            component="input"
            type="text"
            placeholder="Input your TODO"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

import React from 'react';
import { reduxForm, Field } from 'redux-form';

const TodoForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Todo</label>
        <div>
          <Field
            name="todoText"
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

export default reduxForm({ form: 'todoForm' })(TodoForm)

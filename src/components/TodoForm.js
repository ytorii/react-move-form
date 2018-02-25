import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';

const validate = values => {
  const errors = {}
  if (!values.todoText) {
    errors.todoText = 'Required'
  } else if (values.todoText.length > 100) {
    errors.todoText = 'Must be 100 characters or less'
  } else if (values.todoText.length < 5) {
    errors.todoText = 'Must be 5 characters or more'
  }

  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const TodoForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <Field
            name='todoText'
            component={renderField}
            type='text'
            label='Add your TODOS!'
          />
        </div>
        <div>
          <label>Priority</label>
          <Field name='priority' component='select'>
            <option></option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </Field>
        </div>
      </div>
      <div>
        <button type='submit' disabled={pristine || submitting}>
          やること追加
        </button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>
          やりなおし
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'todoForm',
  validate,
})(TodoForm)

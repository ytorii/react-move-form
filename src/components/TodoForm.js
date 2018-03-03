import React from 'react';
import { reduxForm, Field } from 'redux-form';
import renderDatePicker from './forms/DatePickerForm.js'
import renderTextInput from './forms/TextInputForm.js'

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

const TodoForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div style={{ padding: '20px' }}>
      <div className='card border-primary'>
        <div className='card-header text-white bg-primary'>
          TODOを追加
        </div>
        <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
          <fieldset>
            <div className="form-group">
              <Field
                name='text'
                component={renderTextInput}
                type='text'
                label='TODOを入力'
                className='form-control'
              />
            </div>
              <div className="form-group">
                <label>優先度</label>
                <Field name='priority' component='select' className='form-control'>
                  <option></option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </Field>
              </div>
              <div className="form-group">
                <Field
                  name='startDate'
                  component={renderDatePicker}
                  label='いつから'
                  className='form-control'
                />
              </div>
              <div className="form-group">
                <Field
                  name='deadlineDate'
                  component={renderDatePicker}
                  label='期限'
                  className='form-control'
                />
              </div>
          </fieldset>
          <div>
            <button type='submit' disabled={pristine || submitting} className='btn btn-primary'>
              やること追加
            </button>
            <button type='button' disabled={pristine || submitting} onClick={reset} className='btn btn-secondary'>
              やりなおし
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default reduxForm({ form: 'todoForm', validate })(TodoForm)

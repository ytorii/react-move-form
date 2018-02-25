import React from 'react';

import 'moment/locale/ja'
import moment from 'moment'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default ({input, label, meta: {touched, error} }) => (
  <div>
    <label>{label}</label>
    <DatePicker {...input} dateForm='YYYY/MM/DD' selected={input.value ? moment(input.value) : moment()} />
    {touched && error && <span>{error}</span>}
  </div>
)
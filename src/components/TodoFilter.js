import React from 'react';

export default props => {
  const filterChangeHandler = e => {
    props.filterTodos({filterText: e.target.value})
  }

  return (
    <div style={{ padding: '20px' }}>
      <div className='card border-primary'>
        <div className='card-header text-white bg-primary'>
          やることを検索
        </div>
        <fieldset style={{ padding: '10px' }}>
          <input
            type='text'
            placeholder='探したいTODOを入力'
            value={props.filterText}
            className='form-control'
            onChange={filterChangeHandler}
          />
        </fieldset>
      </div>
    </div>
  )
}

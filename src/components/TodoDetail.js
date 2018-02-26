import React from 'react'

export default props => (
  <div style={{ padding: '20px' }}>
    <div className='card border-primary'>
      <div className='card-header text-white bg-primary'>
        やることの詳細
      </div>
      <div className='card-body'>
        <table className='table table-hover'>
          <thead>
            <tr className='table-active'>
              <th scope='col'>項目</th>
              <th scope='col'>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr className='table-light'>
              <th scope='row'>やること</th>
              <td>{ props.text }</td>
            </tr>
            <tr className='table-light'>
              <th scope='row'>優先度</th>
              <td>{ props.priority }</td>
            </tr>
            <tr className='table-light'>
              <th scope='row'>いつから</th>
              <td>{ props.startDate }</td>
            </tr>
            <tr className='table-light'>
              <th scope='row'>期限</th>
              <td>{ props.deadlineDate }</td>
            </tr>
            <tr className='table-light'>
              <th scope='row'>終わった？</th>
              <td>{ props.completed ? '終わった！' : 'まだです' }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

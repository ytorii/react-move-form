import React from 'react'

export default props => (
  <div style={{padding: '20px' }} >
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
          <td>Column content</td>
        </tr>
        <tr className='table-light'>
          <th scope='row'>優先度</th>
          <td>Column content</td>
        </tr>
        <tr className='table-light'>
          <th scope='row'>いつから</th>
          <td>Column content</td>
        </tr>
        <tr className='table-light'>
          <th scope='row'>期限</th>
          <td>Column content</td>
        </tr>
        <tr className='table-light'>
          <th scope='row'>終わった？</th>
          <td>Column content</td>
        </tr>
      </tbody>
    </table>
  </div>
)

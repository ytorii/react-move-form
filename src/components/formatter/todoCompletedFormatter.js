import React from 'react'

export default completed => {
  return (
  <div>
    { completed.value ? '完了' : 'まだです' }
  </div>
  )
}

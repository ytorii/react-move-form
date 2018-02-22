import React from 'react'

export default props => (
  <g key={props.id} onClick={props.onClick} >
    <text>{props.text}</text>
  </g>
)

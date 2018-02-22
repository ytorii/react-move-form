import React from 'react'

export default props => (
  <div
    key={props.id}
    onClick={props.onClick}
    style={{
      position: 'absolute',
      transform: `translate(${props.x}px, ${props.id * 20}px)`,
      opacity: props.opacity,
      color: props.color,
    }}
  >
    {props.text}
  </div>
)

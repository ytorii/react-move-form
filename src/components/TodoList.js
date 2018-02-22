import React from 'react'
import {
  easeBackOut,
  easeBackInOut,
  easeBounce,
} from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup'

import Todo from './Todo'

const width = window.innerWidth || 200

export default props => {
  const count = props.todos.length
  return (
    <NodeGroup
      data={props.todos}
      keyAccessor={d => d.id}
      start={() => ({
        x: [width * 0.2],
        opacity: 1e-6,
        color: 'black',
      })}

      enter={() => ([
        {
          x: [width * 0.4],
          color: ['#00cf77'],
          timing: { delay: 500, duration: 1000, ease: easeBackInOut },
        },
        {
          opacity: [1],
          timing: { duration: 500 },
        },
      ])}

      update={() => ({
        x: [width * 0.4], // handle interrupt, if already at value, nothing happens
        opacity: 1, // make sure opacity set to 1 on interrupt
        color: 'red',
        timing: { duration: 500, ease: easeBackOut },
        })}

      leave={() => ([
        {
          x: [width * 0.8],
          color: ['#ff0063', 'black'],
          timing: { duration: 1500, ease: easeBounce },
        },
        {
          opacity: [0],
          timing: { delay: 750, duration: 1000 },
        },
      ])}
    >
      { nodes => (
        <div style={{ margin: 10, height: count * 20, position: 'relative' }}>
          {nodes.map(({ key, data, state: { x, opacity, color} }) => (
            <Todo
              key={data.id}
              id={data.id}
              text={data.text}
              completed={data.completed}
              onClick={() => props.completeTodo(data.id)}
              x={x}
              opacity={opacity}
              color={color}
            />
          ))}
        </div>
      )}
    </NodeGroup>
  )
}

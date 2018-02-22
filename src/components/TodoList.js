import React from 'react'
import { easeExpInOut } from 'd3-ease'
import NodeGroup from 'react-move/NodeGroup'

import Todo from './Todo'
import Surface from './Surface'

const view = [1000, 250]; // [width, height]
const trbl = [10, 100, 10, 100]; // [top, right, bottom, left] margins


export default props => (
  <Surface view={view} trbl={trbl}>
    <NodeGroup
      data={props.todos}
      keyAccessor={d => d.id}
      start={() => ({
        opacity: 1e-6,
      })}
  
      enter={(d) => ({
        opacity: [0.7],
      })}
  
      update={(d, i) => ({
        opacity: [0.7],
        timing: { duration: 750, delay: i * 50, ease: easeExpInOut },
      })}
  
      leave={() => ({
        opacity: [1e-6],
        timing: { duration: 750, ease: easeExpInOut },
      })}
    >
      { nodes => (
        <g>
          {nodes.map(({ key, data, state }) => (
            <Todo
              key={key}
              text={data.text}
              completed={data.completed}
              onClick={() => props.completeTodo(data.id)}
            />
          ))}
        </g>
      )}
    </NodeGroup>
  </Surface>
)

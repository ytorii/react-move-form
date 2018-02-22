import React from 'react'

export default function Surface(props) {
  const { className, view, trbl, style, children, ...other } = props;
  const paddingBottom = `${Math.round((view[1] / view[0]) * 100)}%`;

  return (
    <div
      className={className}
      style={{ ...style, position: 'relative', width: '100%', height: '0px', paddingBottom }}
      {...other}
    >
      <svg
        viewBox={`0 0 ${view[0]} ${view[1]}`}
        style={{ position: 'absolute', width: '100%', height: '100%', left: 0, top: 0 }}
      >
        <g transform={`translate(${trbl[3]} ,${trbl[0]})`}>
          {children}
        </g>
      </svg>
    </div>
  );
}


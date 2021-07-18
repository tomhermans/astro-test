// import React, { useState } from 'preact'
import { h } from 'preact';
import { useState } from 'preact/hooks';


export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ margin: "20px 0" }}>
      <h1>Simple React Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => {
        setCount(count + 1)
      }
      }>+</button>
      <button onClick={() => {
        setCount(count - 1)
      }
      }>-</button>
    </div>
  )
}
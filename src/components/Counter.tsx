import React, { useState } from 'react'

const initState = 0

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState<number>(initialCount)
  const increase = () => setCount((prev) => prev + 1)
  const decrease = () => {
    if (count === 0) return
    setCount((prev) => prev - 1)
  }
  const reset = () => setCount(initState)
  return (
    <div>
      <button onClick={decrease}>-</button>
      <div role="count">{count}</div>
      <button onClick={increase}>+</button>
    </div>
  )
}

export default Counter

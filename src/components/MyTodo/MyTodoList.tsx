import React, { useContext } from 'react'
import { MyTodoStateContext } from './MyTodoProvider'

const MyTodoList = () => {
  const todos = useContext(MyTodoStateContext)

  return (
    <div>
      <div role="summary">{`Total items: ${todos.length}`}</div>
    </div>
  )
}

export default MyTodoList

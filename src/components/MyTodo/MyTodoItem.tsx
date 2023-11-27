import React, { useContext } from 'react'
import { MyTodoStateContext } from './MyTodoProvider'

const MyTodoItem = () => {
  const todos = useContext(MyTodoStateContext)

  return (
    <div>
      {todos?.map((todo) => (
        <div key={todo.id}>
          <div className={todo.status ? 'line-through' : ''}>{todo.name}</div>
          <button role="status-button">{todo.status ? '완료' : '미완료'}</button>
          <button role="delete-button">삭제</button>
        </div>
      ))}
    </div>
  )
}

export default MyTodoItem

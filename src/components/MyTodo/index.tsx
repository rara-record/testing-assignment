import React from 'react'
import MyTodoCreate from './MyTodoCreate'
import MyTodoList from './MyTodoList'

const MyTodo = () => {
  return (
    <div>
      <h1>해야 할 업무를 등록해주세요</h1>
      <MyTodoCreate />
      <h2>해야할 일 목록</h2>
      <MyTodoList />
    </div>
  )
}

export default MyTodo

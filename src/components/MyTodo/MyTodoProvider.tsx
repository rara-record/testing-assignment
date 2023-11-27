import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react'
import { MyContextDispatchType, MyContextStateType, TodoType } from '../../types/MyTodo'

type MyTodoProviderType = {
  value: Array<TodoType>
}

export const MyTodoStateContext = createContext<MyContextStateType>([])
export const MyTodoDispatchContext = createContext<MyContextDispatchType>({
  createTodo: (item: TodoType) => {},
  updateTodo: (id: number) => {},
  deleteTodo: (id: number) => {},
})

const MyTodoProvider = ({ children, value }: PropsWithChildren<MyTodoProviderType>) => {
  const [state, setState] = useState<TodoType[]>(value)

  const createTodo = useCallback((item: TodoType) => {}, [])
  const updateTodo = useCallback((id: number) => {}, [])
  const deleteTodo = useCallback((id: number) => {}, [])

  const todos = useMemo(() => state, [state])

  return (
    <MyTodoDispatchContext.Provider value={{ createTodo, updateTodo, deleteTodo }}>
      <MyTodoStateContext.Provider value={todos}>{children}</MyTodoStateContext.Provider>
    </MyTodoDispatchContext.Provider>
  )
}

export default MyTodoProvider

export type TodoType = {
  id: string
  name: string
  status: boolean
}

export type MyContextStateType = TodoType[]

export type MyContextDispatchType = {
  createTodo: (item: TodoType) => void
  deleteTodo: (id: number) => void
  updateTodo: (id: number) => void
}

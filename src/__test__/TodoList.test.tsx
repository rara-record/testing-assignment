import MyTodoProvider from '../components/MyTodo/MyTodoProvider'
import { render, screen } from '@testing-library/react'
import { TodoType } from '../types/MyTodo'
import MyTodoList from '../components/MyTodo/MyTodoList'

const mockTodos = [{ id: '1', name: '공부하기', status: true }]

const renderWithMockContext = (value: TodoType[]) => {
  return render(
    <MyTodoProvider value={value}>
      <MyTodoList />
    </MyTodoProvider>
  )
}

describe('<MyTodoList /> component', () => {
  it('render test with total item size 0', () => {
    renderWithMockContext([])
    expect(screen.getByRole('summary').textContent).toBe(`Total items: 0`)
  })
  it('render test with total item size 1', () => {
    renderWithMockContext(mockTodos)
    expect(screen.getByRole('summary').textContent).toBe(`Total items: ${mockTodos.length}`)
  })
})

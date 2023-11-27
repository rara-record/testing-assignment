import { render, screen, waitFor } from '@testing-library/react'
import MyTodoProvider from '../components/MyTodo/MyTodoProvider'
import MyTodoItem from '../components/MyTodo/MyTodoItem'
import { TodoType } from '../types/MyTodo'

const mockTodoItem = {
  id: '1',
  name: '밥먹기',
  status: true,
}

const renderMockContext = (value: TodoType[]) => {
  return render(
    <MyTodoProvider value={value}>
      <MyTodoItem />
    </MyTodoProvider>
  )
}

describe('<TodoItem />', () => {
  it('Render test with completed Todo item', () => {
    renderMockContext([
      {
        id: '1',
        name: '밥먹기',
        status: false,
      },
    ])
    expect(screen.getByText('밥먹기').className).toBe('')
    expect(screen.getByText('미완료'))
    expect(screen.getByText('삭제'))
  })
  it('Render test with uncompleted  Todo item', async () => {
    renderMockContext([
      {
        id: '1',
        name: '밥먹기',
        status: true,
      },
    ])
    expect(screen.getByText('밥먹기').className).toBe('line-through')
    expect(screen.getByText('완료'))
    expect(screen.getByText('삭제'))
  })
})

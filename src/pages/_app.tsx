import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../theme'
import MyTodoProvider from '../components/MyTodo/MyTodoProvider'
import TodoProvider from '../context/todoContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MyTodoProvider value={[]}>
        <Component {...pageProps} />
      </MyTodoProvider>
    </ThemeProvider>
  )
}

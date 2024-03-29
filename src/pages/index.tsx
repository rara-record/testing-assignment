import Head from 'next/head'
import Switch from '../components/Switch'
import { TodoList } from '../components/TodoList'
import { TodoCreate } from '../components/TodoCreate'
import MyTodo from '../components/MyTodo'

export default function Home() {
  return (
    <>
      <Head>
        <title>Assignments</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MyTodo />
      </main>
    </>
  )
}

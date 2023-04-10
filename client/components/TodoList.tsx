import Todo from './Todo'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchTodos } from '../actions/todos'
import { TodoCreate } from '../../models/todo'

export default function TodoList() {
  const { loading, error, data: todos } = useAppSelector((state) => state.todos)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        {loading && <p>Loading</p>}
        {error && <p>Something went wrong</p>}
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </ul>
      </section>
    </>
  )
}

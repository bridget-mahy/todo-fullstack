import { ChangeEvent, FormEvent, useState } from 'react'
import { Todo, TodoCreate } from '../../models/todo'
import { addNewTodo } from '../actions/todos'
import { useAppDispatch, useAppSelector } from '../hooks'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  // need to handle addTodo
  const [newTodo, setNewTodo] = useState({ task: '' } as TodoCreate)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo({ task: event.target.value })
  }

  const dispatch = useAppDispatch()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    dispatch(addNewTodo(newTodo))
    setNewTodo({ task: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          value={newTodo.task}
          onChange={handleChange}
        />
      </form>
    </>
  )
}

export default AddTodo

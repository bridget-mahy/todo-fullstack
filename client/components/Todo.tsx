import { ChangeEvent, FormEvent, useState } from 'react'
import { Todo, TodoUpdate } from '../../models/todo'
import { deleteATodo, editTodo } from '../actions/todos'
import { useAppDispatch } from '../hooks'
type Props = Todo
export default function ToDo(todo: Props) {
  const [newTodo, setNewTodo] = useState({
    task: '',
    isComplete: false,
  } as TodoUpdate)
  const dispatch = useAppDispatch()

  function handleDelete() {
    dispatch(deleteATodo(todo.id))
  }

  function handleCheck() {
    setNewTodo({ isComplete: true })
    dispatch(editTodo(todo.id, { isComplete: todo.isComplete }))
  }

  function handleEdit(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo({ task: event.target.value })
  }

  function handleSubmit(event: FormEvent<HTMLInputElement>) {
    event.preventDefault()
    dispatch(editTodo(todo.id, newTodo))
    setNewTodo({ task: '' })
  }

  return (
    <li className={todo.isComplete ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={handleCheck}
          checked={todo.isComplete}
        />
        <label htmlFor="view">{todo.task}</label>
        <button className="destroy" onChange={handleDelete}></button>
      </div>
      {/* below will require li to have classname="editing" */}
      <input className="edit" onChange={handleEdit} onSubmit={handleSubmit} />

      {/* conditional rendering - edit also done conditionally based on user event, PATCH checkbox click edits isComplete boolean*/}
    </li>
  )
}

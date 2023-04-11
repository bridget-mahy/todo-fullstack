import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react'
import { Todo, TodoUpdate } from '../../models/todo'
import { deleteATodo, editTodo } from '../actions/todos'
import { useAppDispatch } from '../hooks'
type Props = Todo
export default function ToDo(todo: Props) {
  const [updatedTodo, setUpdatedTodo] = useState({
    task: '',
    isComplete: false,
  } as TodoUpdate)

  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useAppDispatch()

  function handleDelete() {
    dispatch(deleteATodo(todo.id))
  }

  function handleCheck() {
    const updatedIsComplete = !todo.isComplete
    setUpdatedTodo({ ...todo, isComplete: updatedIsComplete })
    dispatch(editTodo(todo.id, { isComplete: updatedIsComplete }))
  }

  function handleEdit(event: ChangeEvent<HTMLInputElement>) {
    setUpdatedTodo({ task: event.target.value })
  }

  const handleDblClick = () => {
    setIsEditing(true)
  }

  const handleBlur = () => {
    setIsEditing(false)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    dispatch(editTodo(todo.id, { task: updatedTodo.task }))
    setIsEditing(false)
  }

  return (
    <li
      onDoubleClick={handleDblClick}
      className={`${todo.isComplete ? 'completed' : ''} ${
        isEditing ? 'editing' : ''
      }`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={handleCheck}
          checked={updatedTodo.isComplete}
        />
        <label htmlFor="view">{todo.task}</label>
        <button className="destroy" onClick={handleDelete}></button>
      </div>
      {/* below will require li to have classname="editing" */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="edit"
          value={updatedTodo.task}
          onChange={handleEdit}
          onBlur={handleBlur}
        />
      </form>

      {/* conditional rendering - edit also done conditionally based on user event, PATCH checkbox click edits isComplete boolean*/}
    </li>
  )
}

// need a prop w Todo interface
import * as Models from '../../models/todo'

// type Props = Models.Todo
interface Props {
  todo: Models.Todo
  hello: string
}

export default function ToDo({ todo, hello }: Props) {
  return (
    <li className={todo.isComplete ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.isComplete} />
        <label htmlFor="view">{todo.task}</label>
        <button className="destroy"></button>
      </div>
      {/* below will require li to have classname="editing" */}
      {/* <input className="edit" value="Create a TodoMVC template" /> */}

      {/* List items should get the className `editing` when editing and `completed` when marked as completed */}
      {/* conditional rendering - edit also done conditionally based on user event, PATCH checkbox click edits isComplete boolean*/}
      {/* li classname="editing" will hide div "view"*/}
    </li>
  )
}

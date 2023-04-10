import Todo from './Todo'

export default function TodoList() {
  const array = [
    {
      id: 1,
      task: 'mow the lawn',
      createdAt: 1681078014693,
      isComplete: true,
    },
    {
      id: 2,
      task: 'make ice coffee',
      createdAt: 1681078014693,
      isComplete: false,
    },
    {
      id: 3,
      task: 'listen to new playlist',
      createdAt: 1681078014693,
      isComplete: false,
    },
    {
      id: 6,
      task: 'log on',
      createdAt: 1681085268525,
      isComplete: false,
    },
  ]
  return (
    <>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {array.map((todo) => (
            <Todo key={todo.id} todo={todo} hello="hello" />
          ))}
        </ul>
      </section>
    </>
  )
}

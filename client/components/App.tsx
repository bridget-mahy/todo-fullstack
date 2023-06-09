import AddTodo from './AddTodo'
import TodoList from './TodoList'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <TodoList />
      <footer className="footer"></footer>
    </>
  )
}

export default App

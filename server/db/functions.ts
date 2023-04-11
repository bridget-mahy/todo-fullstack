import knex from 'knex'
import config from './knexfile'
import { Todo, TodoCreate, TodoUpdateSnake } from '../../models/todo'
const connection = knex(config.development)

export async function getTodos(db = connection): Promise<Todo[]> {
  return await db('todos').select(
    'todos.id',
    'todos.task',
    'todos.created_at as createdAt',
    'todos.is_complete as isComplete'
  )
}

export async function addTodo(
  newTask: TodoCreate,
  db = connection
): Promise<Todo[]> {
  await db('todos').insert({
    ...newTask,
    created_at: new Date(Date.now()),
    is_complete: false,
  })
  return getTodos()
}

export async function deleteTodo(id: number, db = connection): Promise<Todo[]> {
  await db('todos').where('id', id).del()
  return getTodos()
}

export async function updateTodo(
  id: number,
  updatedTodo: TodoUpdateSnake,
  db = connection
) {
  console.log('database updated todo:', updatedTodo, 'id:', id)
  await db<Todo>('todos').update(updatedTodo).where({ id })
  return getTodos()
}

import knex from 'knex'
import config from './knexfile'
import { Todo, TodoCreate } from '../../models/todo'
const connection = knex(config.development)

export async function getTodos(db = connection): Promise<Todo[]> {
  return await db('todos').select()
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

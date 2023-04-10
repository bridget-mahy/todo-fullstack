import request from 'superagent'
import { Todo, TodoCreate, TodoUpdate } from '../../models/todo'

const rootUrl = '/api/v1'

export async function getTodos(): Promise<Todo[]> {
  const response = await request.get(rootUrl + '/todos')
  return response.body.todos
}

export async function addTodo(newTodo: TodoCreate): Promise<Todo[]> {
  const response = await request.post(rootUrl + '/todos').send(newTodo)
  return response.body.todos
}

export async function deleteTodo(id: number): Promise<Todo[]> {
  const response = await request.delete(rootUrl + `/todos/${id}`)
  return response.body.todos
}

export async function updateTodo(
  id: number,
  updatedTodo: TodoUpdate
): Promise<Todo[]> {
  const response = await request
    .patch(rootUrl + `/todos/${id}`)
    .send(updatedTodo)
  return response.body.todos
}

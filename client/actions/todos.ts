import { ThunkAction } from '../store'
import { getTodos, addTodo, deleteTodo, updateTodo } from '../apis/todos'
import { Todo, TodoCreate, TodoUpdate } from '../../models/todo'

export const SET_TODOS_PENDING = 'SET_TODOS_PENDING'
export const SET_TODOS_SUCCESS = 'SET_TODOS_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export type TodoAction =
  | {
      type: typeof SET_TODOS_PENDING
      payload: null
    }
  | {
      type: typeof SET_TODOS_SUCCESS
      payload: Todo[]
    }
  | { type: typeof SET_ERROR; payload: string }

export function setTodosPending(): TodoAction {
  return {
    type: SET_TODOS_PENDING,
    payload: null,
  }
}

export function setTodosSuccess(todos: Todo[]): TodoAction {
  return {
    type: SET_TODOS_SUCCESS,
    payload: todos,
  }
}

export function setError(errMessage: string): TodoAction {
  return {
    type: SET_ERROR,
    payload: errMessage,
  }
}

export function fetchTodos(): ThunkAction {
  return async (dispatch) => {
    dispatch(setTodosPending())
    try {
      const todos = await getTodos()
      dispatch(setTodosSuccess(todos))
    } catch (err: any) {
      dispatch(setError(err.message))
    }
  }
}

export function addNewTodo(newTodo: TodoCreate): ThunkAction {
  return async (dispatch) => {
    try {
      const todos = await addTodo(newTodo)
      dispatch(setTodosSuccess(todos))
    } catch (err: any) {
      dispatch(setError(err.message))
    }
  }
}

export function deleteATodo(id: number): ThunkAction {
  console.log('delete in actions getting hit')
  return async (dispatch) => {
    try {
      const todos = await deleteTodo(id)
      dispatch(setTodosSuccess(todos))
    } catch (err: any) {
      dispatch(setError(err.message))
    }
  }
}

export function editTodo(id: number, updatedTodo: TodoUpdate): ThunkAction {
  return async (dispatch) => {
    try {
      const todos = await updateTodo(id, updatedTodo)
      dispatch(setTodosSuccess(todos))
    } catch (err: any) {
      console.log(err.message)
      dispatch(setError(err.message))
    }
  }
}

import {
  SET_TODOS_PENDING,
  SET_TODOS_SUCCESS,
  SET_ERROR,
  TodoAction,
} from '../actions/todos'
import { Todo } from '../../models/todo'

interface TodoState {
  loading: boolean
  error: string | undefined
  data: Todo[]
}

const initialState: TodoState = {
  loading: false,
  error: undefined,
  data: [],
}

const reducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case SET_TODOS_PENDING:
      return {
        loading: true,
        error: undefined,
        data: [],
      }
    case SET_TODOS_SUCCESS:
      return {
        loading: false,
        error: undefined,
        data: action.payload,
      }
    case SET_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      }
    default:
      return state
  }
}

export default reducer

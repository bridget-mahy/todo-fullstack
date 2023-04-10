import request from 'superagent'
import { Todo } from '../../models/todo'

const rootUrl = '/api/v1'

export async function getGroups(): Promise<Todo[]> {
  const response = await request.get(rootUrl + '/todos')
  return response.body.groups
}

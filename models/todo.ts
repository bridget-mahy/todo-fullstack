export interface Todo {
  id: number
  task: string
  createdAt: number
  isComplete: boolean
}

export type TodoCreate = Partial<Omit<Todo, 'id' | 'createdAt' | 'isComplete'>>
export type TodoUpdate = Partial<Omit<Todo, 'id' | 'createdAt'>> & {
  task?: string
  isComplete?: boolean
}

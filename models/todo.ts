export interface Todo {
  id: number
  task: string
  createdAt: number
  isComplete: boolean
}

export interface TodoSnake {
  id: number
  task: string
  created_at: number
  is_complete: boolean
}

export type TodoUpdateSnake = Partial<Omit<Todo, 'id' | 'createdAt'>> & {
  task?: string
  is_complete?: boolean
}

export type TodoCreate = Partial<Omit<Todo, 'id' | 'createdAt' | 'isComplete'>>
export type TodoUpdate = Partial<Omit<Todo, 'id' | 'createdAt'>> & {
  task?: string
  isComplete?: boolean
}

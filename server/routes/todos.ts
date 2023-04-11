import express from 'express'
import { TodoCreate, Todo } from '../../models/todo'

import * as db from '../db/functions'

const router = express.Router()

// GET /api/v1/todos
router.get('/', async (req, res) => {
  try {
    const todos: Todo[] = await db.getTodos()
    return res.json({ todos })
  } catch (error) {
    res.sendStatus(500)
  }
})

// POST /api/v1/todos
router.post('/', async (req, res) => {
  try {
    const newTodo: TodoCreate = req.body
    if (!newTodo.task) {
      res.sendStatus(400).json({ message: 'New task cannot be empty' })
      return
    }
    const todos: Todo[] = await db.addTodo(newTodo)
    return res.json({ todos })
  } catch (error) {
    res.sendStatus(500)
  }
})

// DELETE /api/v1/todos/:id
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const todos: Todo[] = await db.deleteTodo(id)
    return res.json({ todos })
  } catch (error) {
    res.sendStatus(500)
  }
})

// UPDATE /api/v1/todos/:id
router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const todo = req.body
    const todoSnake = {
      is_complete: todo.isComplete,
      task: todo.task,
    }
    const todos: Todo[] = await db.updateTodo(id, todoSnake)
    res.json({ todos })
  } catch (err) {
    res.sendStatus(500)
  }
})

export default router

import { InjectionKey, reactive, readonly } from 'vue'
import { Params, Todo, TodoState, TodoStore } from '@/store/todo/types'

// It's mock
const mockTodo: Todo[] = [
  {
    id: 1,
    title: 'todo1',
    description: '1つ目',
    status: 'waiting',
    createdAt: new Date('2020-12-01'),
    updatedAt: new Date('2020-12-01'),
  },
  {
    id: 2,
    title: 'todo2',
    description: '2つ目',
    status: 'waiting',
    createdAt: new Date('2020-12-02'),
    updatedAt: new Date('2020-12-02'),
  },
  {
    id: 3,
    title: 'todo3',
    description: '3つ目',
    status: 'working',
    createdAt: new Date('2020-12-03'),
    updatedAt: new Date('2020-12-04'),
  },
]

// We can change state only inside this store
const state = reactive<TodoState>({
  todos: mockTodo,
})

// Change from Params to Todo
const intitializeTodo = (todo: Params) => {
  const date = new Date()
  return {
    id: date.getTime(),
    title: todo.title,
    description: todo.description,
    status: todo.status,
    createdAt: date,
    updatedAt: date,
  } as Todo
}

// Get Todo by id
const getTodo = (id: number) => {
  const todo = state.todos.find((todo) => todo.id === id)
  // In case of not existing todo
  if (!todo) {
    throw new Error(`cannot find todo by id:${id}`)
  }
  return todo
}

// Add Todo
const addTodo = (todo: Params) => {
  state.todos.push(intitializeTodo(todo))
}

// Update Todo by id
const updateTodo = (id: number, todo: Todo) => {
  // findIndex method returns the position of id
  // If todo.id didn't match id, findIndex returns -1
  const index = state.todos.findIndex((todo) => todo.id === id)
  if (index === -1) {
    throw new Error(`cannot find todo by id:${id}`)
  }
  // Update Todo by index of list
  state.todos[index] = todo
}

// Delete by id
const deleteTodo = (id: number) => {
  // state.todos = todos other than this id
  state.todos = state.todos.filter((todo) => todo.id !== id)
}

// Wrapper methods in the store
const todoStore: TodoStore = {
  state: readonly(state),
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
}

export default todoStore

// Set key to need to provide/inject store
export const todoKey: InjectionKey<TodoStore> = Symbol('todo')

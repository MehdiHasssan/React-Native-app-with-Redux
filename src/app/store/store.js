import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../../feature/counter/CounterSlice'
import TodoReducer from '../../feature/Todos/TodoSlice'

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    todo: TodoReducer
  },
})
import {createSlice} from '@reduxjs/toolkit';

export const TodoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    AddTodo: (state, action) => {
      const AddNewTodo = {
        id: action.payload.id,
        name: action.payload.todoName,
      };
      state.push(AddNewTodo);
      console.log(AddNewTodo,"hello")
    },
    deleteTodo: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    UpdateTodo: (state, action) => {
      const id = action.payload.id;
      // console.log(id,state,'fomfjdkljfa')
      const name = action.payload.name;
      const todoIndex = state.findIndex((item) => item.id === id);
      // console.log(id, state);
      if (todoIndex >= 0) state[todoIndex].name = name;
    },
  },
});

export const {AddTodo, deleteTodo, UpdateTodo} = TodoSlice.actions;
export default TodoSlice.reducer;

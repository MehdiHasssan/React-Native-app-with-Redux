import { createSlice } from "@reduxjs/toolkit";


export const TodoSlice = createSlice({
    name:'todo',
    initialState:[],
    reducers :{
         AddTodo:(state, action) => {
            const AddNewTodo={
            id: action.payload.todo,
            name :action.payload.todo
        }
        state.push(AddNewTodo)
        },
        deleteTodo: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
          },
    } 
})


export const {AddTodo,deleteTodo} = TodoSlice.actions
export default TodoSlice.reducer
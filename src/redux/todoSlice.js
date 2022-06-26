import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			const todo = { //this becomes the new objects properties
				id: nanoid(),
				title: action.payload.title, //its the title we are updating
				completed: false,
			};
			state.push(todo); //push into the state object...add to the end of the array
		},
		toggleComplete: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id); //find the index of the particular todo that is being used/clicked
			state[index].completed = action.payload.completed; //use the index to get the todo, then change the completed state of the particular 'todo' and update it
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);  //return all the id that is not equal to the payload id
		},
	}
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;

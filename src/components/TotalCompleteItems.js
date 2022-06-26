import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
	
	const todos = useSelector((state) =>
		state.todos.filter((todo) => todo.completed === true)  //bring all the completed todos that have value == true from the entire todos list
		); //this returns an aray that is why we are using .length method to get the total number

	if(todos.length>0){  //if the selected number of complete todo is greater than 1 then show this
		return <h4 className='mt-3'>Total completed items: {todos.length}</h4>
	}
	
};

export default TotalCompleteItems;

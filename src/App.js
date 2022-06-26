import React from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

const App = () => {
	return (
	
		<div className='container bg-light-blue p-4 mt-5'>
			<h1>My Todo List</h1>
			<p>Click the checkbox to indicate completion</p>
			<AddTodoForm />
	<TodoList />
	  <TotalCompleteItems /> 
		</div>
		
	);
};

export default App;

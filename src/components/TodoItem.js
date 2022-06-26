import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleComplete({ id, completed: !completed })); //The togglecompleteasync is convertred to this select the id and toggle its completed state,these are the payloads*/
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id }));  //deleteTodoAsync
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						checked={completed}
						onClick={handleCheckboxClick}
						onChange={toggleComplete}
					></input>
					{title}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger'>
					Delete
				</button>
			</div>
		</li>
	);
};

export default TodoItem;

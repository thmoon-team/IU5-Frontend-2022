import React from "react";

const Todo = ({todo, setStatus, setText}) => {
	return (
		<div className="todo__item">
			<input type='checkbox' checked={todo.complete} onChange={() => setStatus(todo.id)}/>
			<div className={`todo__title ${todo.complete ? 'cross-out' : ''}`}>
				{todo.title}
			</div>
			<button className="edit__btn" onClick={() => setText(todo.id)}>Редактировать</button>
		</div>
	)
}

export default Todo
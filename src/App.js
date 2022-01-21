import React, { useState } from "react";
import "./App.css";

// =============== APP =============== //

function App() {
	const [todos, setTodos] = useState([
		{
			text: "This is a sample todo",
			isDone: false,
		},
	]);

	// ADD TODOS ==========================
	const addTodo = (text) => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	// MARKING TODOS AS DONE =============
	const checkTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isDone = true;
		setTodos(newTodos);
	};

	// DELETING TODOS ====================
	const deleteTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="app">
			<div>
				<h1>Todo List</h1>

				<FormTodo addTodo={addTodo} />

				<div>
					{todos.map((todo, index) => (
						<div>
							<div>
								<Todo
									key={index}
									index={index}
									todo={todo}
									checkTodo={checkTodo}
									deleteTodo={deleteTodo}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

// ========== TODO COMPONENT ========== //

const Todo = ({ todo, index, checkTodo, deleteTodo }) => {
	return (
		<div className="todo">
			<span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
				{todo.text}
			</span>

			<div>
				<button onClick={() => checkTodo(index)}>✓</button>{" "}
				<button onClick={() => deleteTodo(index)}>✕</button>
			</div>
		</div>
	);
};

// ========== FORM TODO COMPONENT ========== //

const FormTodo = ({ addTodo }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Add Todo</label>
				<input
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder="Add new todo"
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default App;

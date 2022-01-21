import React, { useState } from "react";
import "./App.css";
import { FormTodo } from "./components/FormTodo";
import { Todo } from "./components/Todo";

// =============== APP =============== //

function App() {
	const [todos, setTodos] = useState([
		{
			text: "This is a sample task",
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
				<h1>To-Do List</h1>

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

export default App;

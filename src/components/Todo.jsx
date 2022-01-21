import React from "react";

// ========== TODO COMPONENT ========== //

export const Todo = ({ todo, index, checkTodo, deleteTodo }) => {
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

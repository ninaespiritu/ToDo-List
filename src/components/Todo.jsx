import React from "react";

// ========== TODO COMPONENT ========== //

export const Todo = ({ todo, index, checkTodo, deleteTodo }) => {
  return (
    <div className="todo" style={{ backgroundColor: todo.isDone ? "#ffffff" : "" }}>
      <div className="todo-item-left">
        <button id="button-check" onClick={() => checkTodo(index)} style={{ color: todo.isDone ? "#7238FF" : "" }}>✓</button>{" "}
      <span className="todo-item-text" style={{ textDecoration: todo.isDone ? "line-through" : "", color: todo.isDone ? "#7238FF" : "" }}>
        {todo.text}
      </span>
      </div>
      
      <div>
        <button id="button-delete" onClick={() => deleteTodo(index)} style={{ color: todo.isDone ? "#7238FF" : "" }}>✕</button>
      </div>
    </div>
  );
};
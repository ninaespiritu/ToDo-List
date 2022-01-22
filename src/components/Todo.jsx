import React from "react";

// ========== TODO COMPONENT ========== //

export const Todo = ({ todo, index, checkTodo, deleteTodo }) => {
  return (
    <div className="todo" style={{ backgroundColor: todo.isDone ? "#FFF3B5" : "" }}>
      <div className="todo-item-left">
        <button id="button-check" onClick={() => checkTodo(index)} style={{ color: todo.isDone ? "#D9ac00" : "" }}>✓</button>{" "}
      <span className="todo-item-text" style={{ textDecoration: todo.isDone ? "line-through" : "", color: todo.isDone ? "#D9ac00" : "" }}>
        {todo.text}
      </span>
      </div>
      
      <div>
        <button id="button-delete" onClick={() => deleteTodo(index)} style={{ color: todo.isDone ? "#D9ac00" : "" }}>✕</button>
      </div>
    </div>
  );
};
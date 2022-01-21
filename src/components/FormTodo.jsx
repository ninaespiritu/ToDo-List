import React, { useState } from "react";

// ========== FORM TODO COMPONENT ========== //

export const FormTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value)
      return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Add To-Do</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new task" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

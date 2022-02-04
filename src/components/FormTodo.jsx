import React, { useState } from "react";
import "./Components.css";

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
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new task" />
      </div>
      <button type="submit" id="form-button">Submit</button>
    </form>
  );
};

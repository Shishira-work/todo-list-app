import React, { useState } from "react";
export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //to prevent default action of page reload when submitting a form
    const isWhitespaceString = (str) => !/\S/.test(str);
    if (value === "" || isWhitespaceString(value)) {
      alert("enter someting");
    } else {
      addTodo(value);
    }

    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="todo-input"
        placeholder="What is the task today?"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault(); //to prevent default action of page reload when submitting a form
    const isWhitespaceString = (str) => !/\S/.test(str);
    if (value === "" || isWhitespaceString(value)) {
      alert("enter someting");
    } else {
      editTodo(value, task.id);
    }

    // setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="edit-todo-input"
        placeholder="Update Task"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

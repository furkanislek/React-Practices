import { useState, useContext } from "react";
import { TodoListContext } from "./TodoListContext";

function Todoform() {
  const [value, setValue] = useState("");
  const [_, setTodos] = useContext(TodoListContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTodos((prevState) => [
          ...prevState,
          { id: new Date().toISOString(), content: value, completed: false },
        ]);
      }}
    >
      <input
        type="text"
        placeholder="What needs to be done?"
        onChange={(e) => setValue(e.currentTarget.value)}
        value={value}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Todoform;

import { Children } from "react";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import { TodoListProvider } from "./TodoListContext";

function App() {
  return (
    <TodoListProvider>
      <div>
        <Navbar />
        <TodoList />
      </div>
    </TodoListProvider>
  );
}

export default App;

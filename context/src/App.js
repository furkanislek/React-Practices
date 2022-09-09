import { Children } from "react";
import Navbar from "./Navbar";
import Todoform from "./Todoform";
import TodoList from "./TodoList";
import { TodoListProvider } from "./TodoListContext";

function App() {
  return (
    <TodoListProvider>
      <div>
        <Navbar />
        <TodoList />
        <Todoform />
      </div>
    </TodoListProvider>
  );
}

export default App;

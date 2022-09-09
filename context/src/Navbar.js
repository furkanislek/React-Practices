import {useContext} from 'react';
import {TodoListContext} from "./TodoListContext"


function Navbar() {

  const [todos] = useContext(TodoListContext)

  return (
    <nav>
        <h1>Furkan ({todos.length}) </h1>
    </nav>
  )
}

export default Navbar
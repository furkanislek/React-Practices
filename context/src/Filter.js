import {useContext} from 'react'
import {TodoListContext} from "./TodoListContext"

function Filter({todos}) {

  const context = useContext(TodoListContext);

  return (
    <div>
      <h1> {context} </h1>
        <a href="#">All (4)  </a>
        <a href="#">Completed (3)  </a>
        <a href="#">Uncompleted (1 )</a>
    </div>
  )
}

export default Filter
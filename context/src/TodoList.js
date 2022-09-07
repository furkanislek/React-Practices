import {useState, useContext} from 'react'
import Filter from './Filter';
import { TodoListContext } from './TodoListContext';

function TodoList() {

    const context = useContext(TodoListContext);
    const [todos,setTodos] = useState([
        {id:1, content : "HTML", completed: false},
        {id:2, content : "CSS", completed: false},
        {id:3, content : "JS", completed: false},
        {id:4, content :"React", completed:false}
    ])

  return (
    <div>
        <Filter todos={todos} />
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.content} </li>
            ))}
        </ul>
        {context}
    </div>
  )
}

export default TodoList
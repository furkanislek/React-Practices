import {useState} from 'react'
import Filter from './Filter'

function TodoList() {

    const [todos,setTodos] = useState([
        {id:1, content : "HTML", completed: false},
        {id:2, content : "CSS", completed: false},
        {id:3, content : "JS", completed: false},
        {id:4, content :"React", completed:false}
    ])

  return (
    <div>
        <Filter/>
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.content} </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList
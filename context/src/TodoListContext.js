import {createContext} from 'react'

export const TodoListContext = createContext("Hi, Todo List");

export function TodoListProvider({children}) {
    return (
        <TodoListContext.Provider value='Hi, Todo List' >
            {children}
        </TodoListContext.Provider>
    )
}
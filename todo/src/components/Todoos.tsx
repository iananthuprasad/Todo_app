"use client"

import { useTodos } from "@/store/contextapi"



const Todos = () => {
const {todos, toggleTodoAsCompleted, handleTodoDelete}=useTodos()
console.log(todos)

let filterTodos=todos

  return (
    <div>
        <ul>
            { 
            filterTodos.map((todo)=>{
                return(
                <li key={todo.id}>
                    <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={()=>toggleTodoAsCompleted(todo.id)}/>
                    <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                    {
                      todo.completed && (
                        <button type="button" onClick={()=>handleTodoDelete(todo.id)}>delete</button>
                      )
                    }
                </li>
                )
            })
        }
        </ul>
      
    </div>
  )
}

export default Todos
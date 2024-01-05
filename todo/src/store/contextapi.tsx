"use client"


import { ReactNode, createContext, useContext, useState } from "react";

type Todo={
    id:string;
    task:string;
    completed:boolean;
    createdAt : Date;
}

export type TodosContext ={
    todos:Todo[];
    handleAddTodo : (task:string) => void
    toggleTodoAsCompleted : (id:string)=>void
    handleTodoDelete : (id:string)=>void
}

//create

export const todosContext=createContext<TodosContext|null>(null)
   


//provider    ith layout il kodukkanam

export const TodosProvider = ({children}:{children:ReactNode}) =>{

    const [todos,setTodos]=useState<Todo[]>([])


    const handleAddTodo=(task:string)=>{

        setTodos((prev:Todo[])=>{
            const newTodos: Todo[]  = [
                {
                id:Math.random().toString(),
                task,
                completed:false,
                createdAt:new Date()
            },
            ...prev
       ]
        
        return newTodos;
    }
        )

    }

    const toggleTodoAsCompleted=(id:string)=>{

          setTodos((prev:Todo[])=>{

            const newTodos =prev.map((task:Todo)=>{

                if(task.id=== id){
                    return{...task,completed:!task.completed}
                }
                return task;
            }
            )
        
        return newTodos;
    })
    }

    const handleTodoDelete=(id:string)=>{
        setTodos((prev:Todo[])=>{
            const newTodos=prev.filter((task:Todo)=>(
                task.id !== id
            ))
            return newTodos
        })
         console.log(id)
    }



     return (
    <todosContext.Provider value={{todos,handleAddTodo,toggleTodoAsCompleted,handleTodoDelete}}>
      {children}
    </todosContext.Provider>
     )
}

// context api
//no usage now

export function useTodos(){
    const todosContextValue=useContext(todosContext)
    if(!todosContextValue){
        throw new Error('UseTodos used outside of provider')
    }
    return todosContextValue;
}
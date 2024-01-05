"use client"
import { useTodos } from '@/store/contextapi'
import React, { FormEvent, useState } from 'react'

const Addtodo = () => {
    const [todo,setTodo]=useState('')

  const {handleAddTodo} = useTodos()
  
    const add=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        handleAddTodo(todo)
        setTodo('')
    }
 
  return (
    <div>
        <form  onSubmit={add}>
      <input type='text'placeholder='add items' value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
      <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Addtodo

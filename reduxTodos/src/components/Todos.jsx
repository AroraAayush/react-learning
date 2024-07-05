import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
function Todos() {
    const todosList=useSelector((state)=>state.todosList)
  return (
    
    todosList.map((todo)=>{
        return (<div key={todo.id}
         className='w-full'>
            <TodoItem todo={todo}/>
                         </div>)
    })
  )
}

export default Todos




// {todosList.map((todo)=>
//     <div key={todo.id}
//     className='w-full'
//     >
//      <TodoItem todo={todo}/>
//      </div>
//    )}
import React, { useState } from 'react'
import { useTodos } from '../context';

function TodoItem({todo}) {
    console.log("TodoItem rendered for : ",todo.title)
    const [todosTitle, settodosTitle] = useState(todo.title)
    const [isTitleEditable,setIsTitleEditable]=useState(false);
    const [todoCompleted,setTodoCompleted]=useState(todo.completed);

    const {editTodoTitle,deleteTodo,toggleCheckBox}=useTodos();

    const editTodo=()=>{
        if(isTitleEditable)
            {
        editTodoTitle(todo.id,todosTitle)
        setIsTitleEditable(false);
            }
            else
            {
                setIsTitleEditable(true);
            }
    }

    const toggle=(e)=>{
        setIsTitleEditable(false);
        setTodoCompleted((prev)=>!prev);
        toggleCheckBox(todo.id);
    }
  return (
    <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black  ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}>
                <input type="checkbox" checked={todoCompleted} onChange={toggle} />
      <input type="text" className={`border outline-none w-full bg-transparent rounded-lg text-white ${isTitleEditable? '"border-black/10 px-2"': 'border-transparent'}  ${todoCompleted? 'line-through' :""}` }
 name="" id="" readOnly={!isTitleEditable}   value={todosTitle} onChange={(e)=>settodosTitle(e.target.value)}/>

<button  className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50" disabled={todoCompleted} onClick={editTodo}>{isTitleEditable? "📁" : "✏️"}</button>
<button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                disabled={todoCompleted} onClick={() => deleteTodo(todo.id) } 
            >
                ❌
            </button>
    </div>
    
  )
}

export default TodoItem

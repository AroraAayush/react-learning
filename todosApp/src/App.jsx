
import './App.css'
import FormComp from './components/FormComp';
import TodoItem from './components/TodoItem';
import { TodosContextProvider } from './context'

import { useEffect, useState } from 'react';

function App() {
  const [todosList,setTodosList]=useState([]);
  const addTodo=(todo)=>{
    todo={id:Date.now(),...todo};
    console.log(todo);
    setTodosList((prevTodos)=>[todo,...prevTodos]);
  }

  const editTodoTitle=(id,newTitle)=>{
    setTodosList((prevTodos)=> prevTodos.map((todo)=>todo.id==id? {...todo,title:newTitle}:todo))
  }
  const deleteTodo=(id)=>{
    setTodosList((prevTodos)=> prevTodos.filter((todo)=>todo.id!=id)) 
  }
  const toggleCheckBox=(id)=>{
    setTodosList((prevTodos)=> prevTodos.map((todo)=>todo.id==id? {...todo,completed:!todo.completed}:todo))
  }


  useEffect(()=>{
    let data=JSON.parse(localStorage.getItem('todosList'))
    if(data && data.length>0)
      setTodosList(data);
  },[])


  useEffect(()=>{
    localStorage.setItem('todosList',JSON.stringify(todosList));
  },[todosList])

return (
  <TodosContextProvider value={{todosList,addTodo,editTodoTitle,deleteTodo,toggleCheckBox}}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <FormComp/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todosList.map((todo)=>
                         <div key={todo.id}
                         className='w-full'
                         >
                          <TodoItem todo={todo}/>
                          </div>
                        )}
                    </div>
                </div>
            </div>
  </TodosContextProvider>
  
) 
}

export default App

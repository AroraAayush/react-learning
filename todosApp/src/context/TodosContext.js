import React, { createContext, useContext } from "react";


export const TodosContext=React.createContext({todosList:[],
    addTodo:(todo)=>{},
    editTodoTitle:(id,newTitle)=>{},
    deleteTodo:(id)=>{},
    toggleCheckBox:(id)=>{}});


export const TodosContextProvider=TodosContext.Provider;


export  function useTodos() {
    return useContext(TodosContext);
}
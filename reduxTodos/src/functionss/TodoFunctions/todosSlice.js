import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const tmp=JSON.parse(localStorage.getItem('reduxTodos'));
const initialState={
    todosList: (tmp && tmp.length>0) ? tmp :[

    ]
}


export const todosSlice=createSlice({
    name:"reduxTodos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                title:action.payload,
                completed:false
            }
            console.log("Adding new todo : ",newTodo);
            console.log("State todos List : ",state.todosList.length)
            state.todosList.push(newTodo);
            console.log("State todos List : ",state.todosList.length)
        },
        removeTodo:(state,action)=>{
            state.todosList=state.todosList.filter((todo)=>todo.id!=action.payload);
        },
        editTodo:(state,action)=>{
            state.todosList=state.todosList.map((todo)=>todo.id==action.payload.id?{...todo,title:action.payload.title} : todo);
        },
        toggleTodoComplete:(state,action)=>{
            state.todosList=state.todosList.map((todo)=>todo.id==action.payload?{...todo,completed:!todo.completed} : todo);
        }

    }
})


export const {addTodo,editTodo,removeTodo,toggleTodoComplete} =todosSlice.actions;

export default todosSlice.reducer;



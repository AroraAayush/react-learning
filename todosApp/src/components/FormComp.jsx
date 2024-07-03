import { useState } from "react";
import { useTodos } from "../context";

function FormComp() {
    
     const {todosList,addTodo}=useTodos();
    const [todoTitle,setTodoTitle]=useState("");
    const submitForm=(e)=>{
        e.preventDefault();
       addTodo({completed:false,title:todoTitle})

        setTodoTitle("");
    }

    return (
        <form  className="flex" onSubmit={submitForm}>
            <input
                type="text"
                placeholder="Write Todo..."
                value={todoTitle}
                onChange={(e)=>setTodoTitle(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" >
                Add
            </button>
        </form>
    );
}

export default FormComp;


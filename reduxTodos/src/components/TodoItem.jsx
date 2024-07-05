import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo,removeTodo,toggleTodoComplete } from "../functionss/TodoFunctions/todosSlice";
function TodoItem({ todo }) {
    console.log(`Todo Item : ${todo.title}`)
    const [isTodoEditable,setIsTodoEditable]=useState(false);
    const [isTodoCompleted,setIsTodoCompleted]=useState(todo.completed)
    const [newTitle, setnewTitle] = useState(todo.title)
    const dispatch=useDispatch();

    const onEditTitle=()=>{
        const editedTodo={
            id:todo.id,
            title:newTitle
        }
        dispatch(editTodo(editedTodo))
        setIsTodoEditable(false);

    }
    const toggleCompleted=()=>{
        dispatch(toggleTodoComplete(todo.id))
        setIsTodoCompleted((prev)=> !prev);
    }
    
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${ todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            } `}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } text-white ${todo.completed ? "line-through" : ""}`}
                value={newTitle}
                onChange={(e) => setnewTitle(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    

                    if (isTodoEditable) {
                        onEditTitle();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(removeTodo(todo.id))}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;

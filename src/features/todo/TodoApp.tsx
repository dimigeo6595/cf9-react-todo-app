import TodoForm from "./TodoForm.tsx";
import {useRef} from "react";
import {useTodos} from "./hooks/useTodos.ts";


const TodoApp = () => {


    const inputRef = useRef<HTMLInputElement>(null);


    const {todos, addTodo, deleteTodo,editTodo, clearAllTodos} = useTodos();

    const handleAdd = (text: string) => {
        addTodo(text);
        inputRef.current?.focus();
    }



    return (
        <>

            <div className="max-w-sm mx-auto pb-12">
                <h1 className="text-center text-2xl py-8">
                    To-DO List
                </h1>

                <TodoForm onAdd={handleAdd} inputRef={inputRef}/>

                <ul className="space-y-2">
                    {todos.map(todo =>(

                        <>

                            <li key={todo.id} className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
                                <span>{todo.text}</span>
                            </li>

                        </>
                    ))

                    }
                </ul>




            </div>
        </>
    )
}
export default TodoApp;
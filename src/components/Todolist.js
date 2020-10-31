import React from "react";
import Todo from "./Todo"
const Todolist = ({todos, handleDeleteTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo key={todo.id} id={todo.id} todo={todo} handleDeleteTodos={handleDeleteTodos}/>
                ))}
                
            </ul>
            
        </div>
    );
}
export default Todolist;
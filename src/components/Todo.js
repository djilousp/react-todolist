import React from "react"

const Todo = ({ todo, handleDeleteTodos, id }) => {
    const removeTodo = () => handleDeleteTodos(id)
    return (
        <div className="todo">
            <li className="todo-item"> {todo.todosInput} </li>
            <button className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={removeTodo} className="trash-btn"><i className="fas fa-trash"></i></button>
            
        </div>
    );
}
export default Todo
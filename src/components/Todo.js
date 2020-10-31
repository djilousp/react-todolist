import React from "react"

const Todo = ({ todo, handleDeleteTodos, handleCompleteTodos, id }) => {
    const removeTodo = () => handleDeleteTodos(id)
    const completeTask = () => handleCompleteTodos(id)
    return (
        <div className="todo">
            <li className={`todo-item ${todo.isCompleted && 'completed'}`}> {todo.todosInput} </li>
            <button onClick={completeTask} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={removeTodo} className="trash-btn"><i className="fas fa-trash"></i></button>
            
        </div>
    );
}
export default Todo
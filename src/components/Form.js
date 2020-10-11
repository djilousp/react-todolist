import React from "react"

const Form = ({ handleInputText, handleSubmitTodos }) => {
    const setInputState = (e) => {
        handleInputText(e)
    };
    const submitTodos = (e) => {
        e.preventDefault()
        handleSubmitTodos()
    }
    return (
    <form onSubmit={submitTodos}>
        <input 
            type="text" 
            className="todo-input" 
            name="inputText"
            onChange={setInputState}
            required={true}
        />
        <button className="todo-button" type="submit" >
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    )
}
export default Form
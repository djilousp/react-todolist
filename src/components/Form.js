import React from "react"

const Form = ({ handleUserInput, handleSubmitTodos, inputText , filter}) => {
    const setInputState = (e) => {
        handleUserInput(e)
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
            value={inputText} 
            onChange={setInputState}
            required={true}
            autoComplete={"off"}
        />
        <button className="todo-button" type="submit" >
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="filter" className="filter-todo" onChange={handleUserInput}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    )
}
export default Form
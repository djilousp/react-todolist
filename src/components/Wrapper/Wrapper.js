import React from "react"
import Form from "../Form"
import Todolist from "../Todolist"
const Wrapper = ({ todos, inputText, handleUserInput , handleSubmitTodos, handleDeleteTodos, filter}) => {
    return (
        <div className="wrapper">
            <Form handleUserInput={ handleUserInput } inputText={inputText} handleSubmitTodos={ handleSubmitTodos } filter={filter}/>
            <Todolist todos={todos} handleDeleteTodos={handleDeleteTodos} />
        </div>
    );
}
export default Wrapper
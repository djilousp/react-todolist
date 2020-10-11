import React from "react"
import Form from "../Form"
import Todolist from "../Todolist"
const Wrapper = ({ todos, inputText, handleInputText , handleSubmitTodos, handleDeleteTodos}) => {
    return (
        <div className="wrapper">
            <Form handleInputText={ handleInputText } inputText={inputText} handleSubmitTodos={ handleSubmitTodos }/>
            <Todolist todos={todos} handleDeleteTodos={handleDeleteTodos} />
        </div>
    );
}
export default Wrapper
import React from "react"
import Form from "../Form"
import Todolist from "../Todolist"
const Wrapper = ({ todos, inputText, handleUserInput , handleSubmitTodos, handleDeleteTodos, handleCompleteTodos, filter}) => {
    return (
        <div className="wrapper">
            <Form 
                handleUserInput={ handleUserInput } 
                inputText={inputText} 
                handleSubmitTodos={ handleSubmitTodos } 
                filter={filter}
            />
            <Todolist 
                todos={todos} 
                handleDeleteTodos={handleDeleteTodos} 
                handleCompleteTodos={handleCompleteTodos}
            />
        </div>
    );
}
export default Wrapper
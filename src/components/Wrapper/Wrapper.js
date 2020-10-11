import React from "react"
import Form from "../Form"
import Todolist from "../Todolist"
const Wrapper = ({ handleInputText , handleSubmitTodos}) => {
    return (
        <div className="wrapper">
            <Form handleInputText={ handleInputText } handleSubmitTodos={ handleSubmitTodos }/>
            <Todolist />
        </div>
    );
}
export default Wrapper
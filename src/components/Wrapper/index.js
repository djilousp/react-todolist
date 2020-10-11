import React ,{ Component } from "react"
import WrapperComponent from "./Wrapper"
import uniqid from "uniqid"

class Wrapper extends Component{
    constructor(){
        super()
        this.state = {
            inputText:"",
            todos: []
        }

    }
    handleInputText = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    } 
    handleSubmitTodos = () => {
        this.setState(prevState => {
            return {
                inputText:"",
                todos: [...prevState.todos, {todosInput: prevState.inputText, isCompleted: true, id: uniqid()}],
            }
            
        })
    } 
    handleDeleteTodos = (key) => {
        const todosUpdated = this.state.todos.filter(todo => todo.id !== key)
        this.setState({todos: todosUpdated})
    }
    render() {
        return (
            <div>
                <header>
                    <h1>My Todolist </h1>
                </header>
                {/* display new state test */}
                <WrapperComponent 
                    todos={this.state.todos}
                    inputText={this.state.inputText} 
                    handleInputText={this.handleInputText} 
                    handleSubmitTodos={ this.handleSubmitTodos } 
                    handleDeleteTodos={this.handleDeleteTodos}/>
            </div>
        )
    }
}
export default Wrapper
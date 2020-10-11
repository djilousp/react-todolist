import React ,{ Component } from "react"
import WrapperComponent from "./Wrapper"

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
                todos: [...this.state.todos, {todosInput: this.state.inputText, isCompleted: true}]
            }
        })
    } 
    render() {
        return (
            <div>
                <header>
                    <h1>My Todolist </h1>
                </header>
                {/* display new state test */}
                {this.state.todos.map((todo) => {
                    return (
                        <h1> { todo.todosInput } is  { todo.isCompleted  ? "Completed" : "Not Completed" }</h1>
                    )
                })}
                <WrapperComponent handleInputText={this.handleInputText} handleSubmitTodos={ this.handleSubmitTodos }/>
            </div>
        )
    }
}
export default Wrapper
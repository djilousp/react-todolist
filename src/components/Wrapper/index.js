import React ,{ Component } from "react"
import WrapperComponent from "./Wrapper"
import uniqid from "uniqid"

class Wrapper extends Component{
    constructor(){
        super()
        this.state = {
            inputText:"",
            todos: [],
            filter: ""
        }

    }
    handleUserInput = (event) => {
        const {name, value} = event.target
        console.log(event.target.value)
        this.setState({
            [name]: value
        })
    } 
    handleSubmitTodos = () => {
        this.setState(prevState => {
            return {
                inputText:"",
                todos: [...prevState.todos, {todosInput: prevState.inputText, isCompleted: false, id: uniqid()}],
            }
            
        })
    } 
    handleDeleteTodos = (key) => {
        const todosUpdated = this.state.todos.filter(todo => todo.id !== key)
        this.setState({todos: todosUpdated})
    }
    handleCompleteTodos = (key) => {
        const todosUpdated = this.state.todos.map(todo => {
            if (todo.id === key) {
                return {...todo, isCompleted: true}
            }
            return todo
        })
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
                    handleUserInput={this.handleUserInput} 
                    handleSubmitTodos={ this.handleSubmitTodos } 
                    handleDeleteTodos={this.handleDeleteTodos}
                    handleCompleteTodos={this.handleCompleteTodos}
                    filter={this.state.filter}
                />
            </div>
        )
    }
}
export default Wrapper
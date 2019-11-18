import React from 'react';
import './Todo.css'
import Todolist from './Todolist'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { items: [], text: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeItems = this.removeItems.bind(this);
    }


    removeItems(itemId){
    // in order to remove items: 
    // create new array with spread operator
        let array = [...this.state.items]
    // remove items from array
        array.splice(itemId, 1)
    // set state to new array
        this.setState(state => ({
            items :array,
            
        }))
        
    }
    
    render() {
        if (this.props.show) {
            return (
                <div className="Todo">
                    <h3>Things to do</h3>
                    <Todolist items={this.state.items} removeItem={this.removeItems} />
                    <form onSubmit={this.handleSubmit}>
                        {/* <label htmlFor="new-todo">
                            What needs to be done?
                        </label> */}
                        <input
                            id="new todo"
                            onChange={this.handleChange}
                            value={this.state.text}
                        />
                        <button className="addThingBtn">
                            Add #{this.state.items.length + 1}
                        </button>
                    </form>
                </div>
            )

        }
        return ""
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        })

    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.text.length) {
            alert('empty submission')
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        }
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }))
    }

}

export default Todo;



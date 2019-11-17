import React, { Component } from 'react'
import Todo from './Todo/Todo'
import "./MainContainer.css"


 class MainContainer extends Component {
    render() {
        return (
            <div className="MainContainer">
               This is main page wrapper
               {/* <Todo /> */}
            </div>
        )
    }
}

export default MainContainer;
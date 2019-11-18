import React, { Component } from 'react'
import "./MainContainer.css"


 class MainContainer extends Component {
     constructor(props){
         super(props)
         this.state = {
             isFull: this.props.children
         }
     }
    render() {
        return (
            <div className="MainContainer">
               {this.state.isFull  ? this.props.children : "Niente da visualizzare" }
               {/* {this.props.children} */}
            </div>
        )
    }
}

export default MainContainer;
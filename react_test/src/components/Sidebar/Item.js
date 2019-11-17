import React, { Component } from 'react'
// import "./SideBar.css"


 class Item extends Component {
     constructor(props){
         super(props)
         this.state = {
        //      items: [],
             show: true
         }
     }
    render() {
        if (this.props.show) {
            return (
                <div className="">
                </div>
            )
        }
        return (
            ""
        )
    }
}

export default Item;
import React, { Component } from 'react'
import Item from './Item'
import "./SideBar.css"


 class SideBar extends Component {
     constructor(props){
         super(props)
         this.state = {
             items: [

             ],
            //  show: true
         }
     }
    render() {
        if (this.props.show) {
            return (
                <div className="sidebar-wrapper">
                  SideBar
                  <Item  />
                </div>
            )
        }
        return (
            ""
        )
    }
}

export default SideBar;
import React, { Component } from 'react'
// import Item from './Item'
import "./SideBar.css"

class SideBar extends Component {
    render() {
        if (this.props.show) {
            return (
                <div className="sidebar-wrapper">
                    <div>{this.props.children}</div>
                   
                </div>
            )
        }
        return (
            ""
        )
    }
}

export default SideBar;
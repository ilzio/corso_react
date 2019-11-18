import React, { Component } from 'react'
// import Item from './Item'
import "./SideBar.css"

class SideBar extends Component {
    render() {
        // conditional rendering. Probably not the right way to do it
        if (this.props.show) {
            return (
                <div className="sidebar-wrapper">
                    {/* displaying nested components as children */}
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
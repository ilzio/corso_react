import React, { Component } from 'react'
import Clock from './Clock'
import Button from './Button'
import "./Header.css"
import logo from '../placeholder-logo.png'


 class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            showNavbar: true
        }
        // this.toggleNavbar = this.toggleNavbar.bind(this);
    } 
    // this methods toggles the sidebar, to be passed to children as prop and called there as onclick
    toggleNavbar = () => (this.setState({showNavbar : !this.state.showNavbar})) 
     
    render() {
        return (
            <header className="Header">
               <div className="logo-container">
                   <img className="logo" src={logo} alt="logo" />
               </div>
               <Clock  />
               <div className="nav-container">
                    <Button triggerParentSidebarUpdate={this.props.triggerParentSidebarUpdate} text={this.props.btnText}  />
               </div>
            </header>
        )
    }
}

export default Header;
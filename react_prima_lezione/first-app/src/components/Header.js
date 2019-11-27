import React from 'react';
import './Header.css';
import logo from '../logo.svg'
import {
  Link,
} from "react-router-dom";

// qunado non si specifica il cammino relativo, react cerca nella cartella node modules


class Header extends React.Component {
  static defaultProps = {
    config: [],
  }


  render() {

    return (
      <header className="Header" >
        <img src={logo} alt="" className="logo" />


        <ul className="NavList">
          {
            this.props.config.map((item, index) => (
              <li className="NavItem" key={index}> <Link to={item.title} > {item.title} </Link> </li>
            ))
          }
        </ul>
      </header>
    )
  }
}

export default Header



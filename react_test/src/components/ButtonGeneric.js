import React from 'react';
import './Button.css'

// function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
// }

const Button = (props) => {

    return (
        <button
            onClick={props.onclick} className="Button">{props.text}
        </button>)
}


export default Button;



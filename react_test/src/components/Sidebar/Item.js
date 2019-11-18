import React, { Component } from 'react'
import "./Item.css"


const Item = (props) => {
    return (
        <div className="Item">
            {props.name}
        </div>
    )
}

export default Item;
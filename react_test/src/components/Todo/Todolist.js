import React from 'react';
class Todolist extends React.Component{
    render(){
        return (
            <ul>
                {
                this.props.items.map((item, index) => {
                    return <li key={item.id}>{index + 1} - {item.text}</li>
                })
                }
            </ul>
        )
    }
}


export default Todolist;



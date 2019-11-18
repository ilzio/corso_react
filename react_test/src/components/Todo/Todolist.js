import React from 'react';
class Todolist extends React.Component{
    render(){
        return (
            <ul>
                {
                    // this is an example of iterating the elements of an array and returning components parts. 
                    // in this specific case the map method had to display also the index and for this reason a "return" has been added.
                    // probably not the correct way to do it but it works
                this.props.items.map((item, index) => {
                    return <li key={item.id}>{index + 1} - {item.text}</li>
                })
                }
            </ul>
        )
    }
}


export default Todolist;



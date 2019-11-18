import React from 'react';
class Todolist extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items
        }
    }
   
    render() {
        return (
            <ul>
                {
                    // this is an example of iterating the elements of an array and returning components parts. 
                    // in this specific case the map method had to display also the index and for this reason a "return" has been added.
                    // probably not the correct way to do it but it works

                    this.props.items.map((item, index) => {
                        return (
                            <li
                                
                                key={item.id}>
                                {index + 1} - {item.text}
                                <button 
                                    className="removeThingBtn"
                                    onClick={() => this.props.removeItem(index)}>
                                        Remove
                                    </button>
                            </li>
                        )
                    })
                    // this.state.items.map((item, index) => {
                    //     return <li key={item.id}>{index + 1} - {item.text} <button onClick={this.removeItem(item.id)}>)</button></li>
                    // })
                }
            </ul>
        )
    }
}


export default Todolist;



import React from 'react';
import './UsersTable.css'


class UsersTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRow: null,
      selectedUser: null,
    }
  }

  static defaultProps = {
    items: []
  }
  getItemsKeys = () => {
    if (this.props.items.length) {
      return Object.keys(this.props.items[0])
    }
  }


  // solution to pass arguments to onclick function instead of arrow function 
  handleClick = (id) => () => {
    this.setState(prevState => {
      prevState.selectedRow = id
      // must return something, if not it will not update state!
      return {
        selectedRow: id
      }
    })
  }

  editUser = (id) => () => {
    console.log("editando utente " + id)
    let user = this.props.items.find(user => user.id === id)
    // console.log(user)
    this.setState({
      selectedUserToEdit: user
    })
    this.props.handleEdit(id)
  }

  removeUser = (id) => () => {
    console.log("rimuovendo utente " + id)
  }


  render() {
    if (this.props.items.length > 0) {
      const chiavi = this.getItemsKeys()
      return (
        <table className="profilesTable">
          <thead className="profilesTableHead">
            <tr>
              {chiavi ?
                chiavi.map((item, index) => (
                  <td key={index}>{item}</td>
                ))
                : ''}
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item) => (
              <tr
                onClick={this.handleClick(item.id)}
                key={item.id}
                className={this.state.selectedRow === item.id ? 'active' : ''}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.address.city}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.company.name}</td>
                {this.state.selectedRow === item.id ? <td><button onClick={this.editUser(item.id)}>Edit</button><button onClick={this.removeUser(item.id)}>Remove</button></td> : <td></td> }
              </tr>
            ))
            }
          </tbody>
        </table>
      )
    } else {
      return (
        <div></div>
      )
    }

  }
}

export default UsersTable



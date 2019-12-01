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

  handleClick = (id) => () => {
    this.setState(prevState => {
      prevState.selectedRow = id
      return {
        selectedRow: id
      }
    })
  }

  render() {
    if (this.props.items.length > 0) {
      return (
        <table className="profilesTable">
          <thead className="profilesTableHead">
            <tr>
              <td>ID</td>
              <td>Nome</td>
              <td>Email</td>
              <td>Username</td>
              <td>Tel</td>
              <td>Web</td>
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
                <td>{item.phone}</td>
                <td>{item.website}</td>
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



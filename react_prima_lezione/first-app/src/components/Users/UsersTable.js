import React from 'react';
import './UsersTable.css'
// qunado non si specifica il cammino relativo, react cerca nella cartella node modules


class UsersTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRow: null,
      clickedId: null
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
  handleClick = (id) => {
    console.log(id)
    this.setState(prevState => {
      prevState.selectedRow = id
      prevState.clicked = id
    })
  }

  getActive = (clickedId) => {
    return this.state.selectedRow === clickedId
  }

  render() {
    console.log("selected row: ", this.state.selectedRow)
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
              // funziona ma problema che funzione creata ogni volta che si renderizza!! / conditional class not working
              <tr onClick={() => this.handleClick(item.id)} key={item.id} className={this.state.selectedRow === item.id ? 'active' : ''}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.address.city}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>{item.company.name}</td>
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



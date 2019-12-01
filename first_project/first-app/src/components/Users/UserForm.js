import React from 'react';
import './UserForm.css';

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.usersNumber +1
    }
  }

  handleInputChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input value={this.state.name} name="name" onChange={this.handleInputChange} type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input value={this.state.username} name="username" onChange={this.handleInputChange} type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input value={this.state.email} name="email" onChange={this.handleInputChange} type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Tel</label>
          <input value={this.state.phone} name="phone" onChange={this.handleInputChange} type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input value={this.state.website} name="website" onChange={this.handleInputChange} type="text" />
        </div>
        <button type="submit">Invia</button>
      </form>
    )
  }
}


export default UserForm



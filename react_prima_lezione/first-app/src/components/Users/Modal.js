import React from 'react';
import './UserForm.css';

// qunado non si specifica il cammino relativo, react cerca nella cartella node modules

// https://reactjs.org/docs/forms.html

class UserForm extends React.Component {
 

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
      // <form onSubmit={this.handleSubmit} className="Form">
      <form onSubmit={this.handleSubmit} className="Form">
       
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input name="name" onChange={this.handleInputChange} type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input name="username" onChange={this.handleInputChange} type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input name="email" onChange={this.handleInputChange} type="text" />
        </div>
        {/* <div className="form-group">
          <label htmlFor="address">Name</label>
          <input name="address" onChange={this.handleInputChange} type="text" />
        </div> */}
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input name="phone" onChange={this.handleInputChange} type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input name="website" onChange={this.handleInputChange} type="text" />
        </div>
        {/* <div className="form-group">
          <label htmlFor="company">Company</label>
          <input name="company" onChange={this.handleInputChange} type="text" />
        </div> */}
        <button type="submit">Invia</button>
      </form>
    )
  }
}

export default UserForm



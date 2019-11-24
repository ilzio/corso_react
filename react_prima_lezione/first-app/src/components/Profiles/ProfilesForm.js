import React from 'react';
import './ProfilesForm.css';

class ProfilesForm extends React.Component {

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
          <label htmlFor="id">Id</label>
          <input name="id" onChange={this.handleInputChange} type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">jobTitle</label>
          <input name="jobTitle" onChange={this.handleInputChange} type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type </label>
          <select name="type" onChange={this.handleInputChange} >
            <option value="core">core</option>
            <option value="rare">rare</option>
          </select>
          {/* <input name="type" onChange={this.handleInputChange}   type="text" /> */}
        </div>
        <div className="form-group">
          <label htmlFor="positionVacant">positionVacant</label>
          <input name="positionVacant" onChange={this.handleInputChange} type="number" />
        </div>
        <div className="form-group">
          <label htmlFor="staffLeasingOpportunity">staffLeasingOpportunity</label>
          <input type="checkbox" onChange={this.handleInputChange} name="staffLeasingOpportunity" />
        </div>
        <button type="submit">Invia</button>
      </form>
    )
  }
}

export default ProfilesForm



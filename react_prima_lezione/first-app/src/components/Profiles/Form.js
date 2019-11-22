import React from 'react';
import './Form.css';

// qunado non si specifica il cammino relativo, react cerca nella cartella node modules

// https://reactjs.org/docs/forms.html

class Form extends React.Component {
  constructor(props) {
    super(props)
    // this.handleSubmit = this.props.handleSubmit.bind(this)

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

export default Form



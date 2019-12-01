import React from 'react';
import './Profiles.css';
import ProfilesTable from './ProfilesTable'
import Form from './ProfilesForm'

class Profiles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showProfiles: true,
      btnText: "Crea Profilo",
      headerText: "Profili",
      profiles: []
    }
  }

  handleFormSubmission = (payload) => {
    // creates array that includes already existing profiles as well as payload coming from form
    const newArray = [...this.state.profiles, payload];
    // verifies presence of newArray and if true updates state and toggles form view
    if (newArray) {
      this.setState({ profiles: newArray })
      this.toggleForm();
    }
  }

  // using prevState allows to overcome state change asyncronous problems
  toggleForm = () => {
    this.setState(prevState => ({
      showProfiles: !prevState.showProfiles,
      headerText: (prevState.showProfiles ? "Crea Profilo" : "Profili"),
      btnText: (prevState.showProfiles ? "Profili" : "Crea Profilo")
    }))
  }

  render() {
    return (
      <>
        <div className="topContainer">
          <h3>{this.state.headerText}</h3>
          <button onClick={this.toggleForm}>{this.state.btnText}</button>
        </div>
        {this.state.showProfiles ? <ProfilesTable items={this.state.profiles} /> : <Form handleSubmit={this.handleFormSubmission} />}
      </>
    )
  }
}

export default Profiles



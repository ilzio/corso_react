import React from 'react';
import './Profiles.css';
import ProfilesTable from './ProfilesTable'
import GenericTable from './GenericTable'
import Form from './Form'

// qunado non si specifica il cammino relativo, react cerca nella cartella node modules


class Profiles extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showProfiles : true,
      btnText : "Crea Profilo",
      headerText: "Profili",
      profiles : [
        {
          id: 1,
          jobTitle: 'Python Developer',
          type: 'core',
          positionVacant: '25',
          staffLeasingOpportunity: true
        },
        {
          id: 2,
          jobTitle: 'PhP Developer',
          type: 'core',
          positionVacant: '3',
          staffLeasingOpportunity: false
        },
        {
          id: 3,
          jobTitle: 'Java Developer',
          type: 'rare',
          positionVacant: '999',
          staffLeasingOpportunity: false
        },
      ]
    }
  }
  
 
  


handleFormSubmission = (payload) => {
  // 
  const newArray = [...this.state.profiles, payload];
  if(newArray){

  this.setState({profiles: newArray})
    
  this.toggleForm();
}

    


  
}


// using prevState allows to overcome state change asyncronous problems
  toggleForm = () => {
    this.setState(prevState => ({
      showProfiles: !prevState.showProfiles,
      headerText : (prevState.showProfiles ? "Crea Profilo" : "Profili"),
      btnText : (prevState.showProfiles ? "Profili" : "Crea Profilo" )
    }))
  } 

  render() {
    return (
      <>
      <div className="topContainer">
        <h3>{this.state.headerText}</h3>
        <button onClick={this.toggleForm}>{this.state.btnText} </button>
      </div>
      
      {this.state.showProfiles ? <ProfilesTable items={this.state.profiles} /> : <Form handleSubmit={this.handleFormSubmission} />}
      
      
      {/* {this.state.profiles.length > 1 && <GenericTable items={this.state.profiles} />} */}
      {/* <GenericTable items={this.state.profiles} /> */}
      
      
      
      
      {/* {this.state.showProfiles ? <GenericTable items={this.props.items} /> : <Form handleSubmit={this.handleFormSubmission} />} */}
       {/* <GenericTable items={this.state.profiles} /> */}
      {/* {console.log(this.state.profiles)} */}
      </>
    )
}
}

  export default Profiles



import React from 'react';
import './Profiles.css';
import ProfilesTable from './ProfilesTable'
import Form from './Form'

// qunado non si specifica il cammino relativo, react cerca nella cartella node modules


class Profiles extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showProfiles : true,
      btnText : "Iscriviti"
    }
  }
  static defaultProps = {
    items: []
  }
  getItemsKeys = () => {
    if(this.props.items.length){
      return Object.keys(this.props.items[0])
    }
  }

// using prevState allows to overcome state change asyncronous problems
  toggleForm = () => {
    this.setState(prevState => ({
      showProfiles: !prevState.showProfiles,
      btnText : (prevState.showProfiles ? "Iscriviti" : "Profili")
    }))
  } 

  render() {
    const chiavi = this.getItemsKeys()
    return (
      <>
      <div className="topContainer">
        <h3>Profili</h3>
        <button onClick={this.toggleForm}>{this.state.btnText} </button>
      </div>
      {this.state.showProfiles ? <ProfilesTable items={this.props.items} /> : <Form />}
     
      </>
    )
}
}

  export default Profiles



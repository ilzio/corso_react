import React from 'react';
import './Profiles.css';

// quando non si specifica il cammino relativo, react cerca nella cartella node modules

class ProfilesTable extends React.Component {
  static defaultProps = {
    items: []
  }
  getItemsKeys = () => {
    if (this.props.items.length) {
      return Object.keys(this.props.items[0])
    }
  }

  render() {
    if (this.props.items.length > 0) {
      const chiavi = this.getItemsKeys()
      return (
        <table className="profilesTable">
          <thead className="profilesTableHead">
            <tr>
              {
                chiavi.map((item, index) => (
                  <td key={index}>{item}</td>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              this.props.items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.jobTitle}</td>
                  <td>{item.type}</td>
                  <td>{item.positionVacant}</td>
                  <td>{item.staffLeasingOpportunity ? "yes" : "no"}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      )
    } else {
      return (
        <h3>Nessun profilo da visualizzare.</h3>
      )
    }
  }
}

export default ProfilesTable



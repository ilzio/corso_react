import React from 'react';
import './Profiles.css';

// qunado non si specifica il cammino relativo, react cerca nella cartella node modules


class Profiles extends React.Component {
  static defaultProps = {
    items: []
  }
  render() {

    return (
      <table className="profilesTable">
        <thead className="profilesTableHead">
          <tr>
            <td>Id</td>
            <td>Job Title</td>
            <td>Type</td>
            <td>Positions Vacants</td>
            <td>SLO</td>
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
}
}

  export default Profiles



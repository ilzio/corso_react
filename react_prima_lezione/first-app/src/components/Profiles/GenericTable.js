import React from 'react';
import './Profiles.css';

// qunado non si specifica il cammino relativo, react cerca nella cartella node modules


class GenericTable extends React.Component {

  static defaultProps = {
    items: []
  }
  getItemsKeys = () => {
    if (this.props.items.length) {
      return Object.keys(this.props.items[0])
    }
  }

  getArrangedItems = () => {
    const keys = this.getItemsKeys;

    for (let x in keys) { console.log(keys[x]) }
  }


  

  render() {
    // console.log(this.props.items.length)
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
          {/* TABELLA GENERICA CHE PRENDE CHIAVI E ITEM E LI RITORNA */}
          {this.props.items.map((item, index) => (
            <tr key={index}>
              {chiavi.map(chiave => <td>{item[chiave]}</td> )}
              

            </tr>
          ))
          }
        </tbody>
      </table>
    )
  }
}

export default GenericTable



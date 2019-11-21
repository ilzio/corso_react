import React from 'react';
import './Form.css';

// qunado non si specifica il cammino relativo, react cerca nella cartella node modules

// https://reactjs.org/docs/forms.html

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // name: '';
      // surname: '';
      // email: '';
      // name: '';
    }
  }
  
  

  render() {
    return (
      <form className="Form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input name="" placeholder="Inserisci il tuo nome" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Cognome</label>
          <input name="" placeholder="Inserisci il tuo cognome " type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email </label>
          <input name="" placeholder="Inserisci la tua email" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="tel">Telefono</label>
          <input name="" placeholder="Inserisci il tuo telefono" type="number" />
        </div>
      </form>
    )
  }
}

export default Form



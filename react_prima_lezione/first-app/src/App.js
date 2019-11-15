import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderZaurdo from './HeaderZaurdo';

class App extends React.Component {
  constructor(props) {
    // call constructor of mother class
    super(props)

    this.state = {
      nome: "saro",
      n: 0

    }
  }

  updateN = () => {

    setInterval(() => {
      this.setState({
        n: this.state.n += 1
      })

    }, 1000);

  }

  // viene invocato successivamente al render
  componentDidMount() {
    // this.updateN()
  }
  // viene invocato non appena il componente viene renderizzato
  render() {

    return (
      // sintassi per creare un wrapper senza specificare header
      <>
        <HeaderZaurdo />
        <div className="App">
        </div>
      </>
    )
  }
}

export default App;

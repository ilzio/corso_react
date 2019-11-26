import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Profiles from './components/Profiles/Profiles'
import UsersList from './components/Users/UsersList'
import { toggleBar } from './redux/actions/'
import { connect } from 'react-redux';


const navConfig = [
  { title: 'Profili' },
  { title: 'Utenti' },
  { title: 'About' },
]



class App extends Component {

  handleClick = () => {
    this.props.toggleBar()
  }
  // useSelector(state => state.counter) 
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Cliccami</button>
        {this.props.showBar && <Header config={navConfig} />}
        <Profiles />
        <hr />
        <UsersList />
        <hr />
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    showBar: state.showBar
  }
}
const mapDispatchToProps = {
  toggleBar: toggleBar
}
export default connect(mapStatetoProps, mapDispatchToProps)(App)


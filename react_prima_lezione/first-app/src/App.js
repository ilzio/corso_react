import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Profiles from './components/Profiles/Profiles'
import UsersList from './components/Users/UsersList'


const navConfig = [
  { title: 'Profili' },
  { title: 'Utenti' },
  { title: 'About' },
]



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header config={navConfig} />
        <Profiles />
        <hr/>
        <UsersList />
        <hr />
      </div>
    )
  }
}

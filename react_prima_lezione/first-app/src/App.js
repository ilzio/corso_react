import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Profiles from './components/Profiles/Profiles'
import UsersList from './components/Users/UsersList'


const navConfig = [
  { title: 'Profili' },
  { title: 'About' },
]



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header config={navConfig} />
        {/* <Header  /> */}
        <Profiles />
        <UsersList />
      </div>
    )
  }
}

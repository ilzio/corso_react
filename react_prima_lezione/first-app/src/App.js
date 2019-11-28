import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header'
import Profiles from './components/Profiles/Profiles'
import Users from './components/Users/Users'
import Books from './components/Books/Books'
import './App.css'

const navConfig = [
  { title: 'Profili' },
  { title: 'Utenti' },
  { title: 'Libri' }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header config={navConfig} />
          
          <Switch>
            <Route path="/Profili">
              <Profiles />
            </Route>
            <Route path="/Utenti">
              <Users />
            </Route>
            <Route path="/Libri">
              <Books />
            </Route>
          </Switch>
        </Router>
       
      </div>
    )
  }
}

export default App


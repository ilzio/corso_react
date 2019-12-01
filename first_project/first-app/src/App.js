import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header'
import Profiles from './components/Profiles/Profiles'
import Home from './components/Home/Home'
import Users from './components/Users/Users'
import Posts from './components/Posts/Posts'
import './App.css'

const navConfig = [
  { title: 'Profili' },
  { title: 'Utenti' },
  { title: 'Posts' }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header config={navConfig} />
          
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Profili">
              <Profiles />
            </Route>
            <Route path="/Utenti">
              <Users />
            </Route>
            <Route path="/Posts">
              <Posts />
            </Route>
          </Switch>
        </Router>
       
      </div>
    )
  }
}

export default App


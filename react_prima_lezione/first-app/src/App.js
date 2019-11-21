import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Profiles from './components/Profiles/Profiles'


const navConfig = [
  { title: 'Profili' },
  { title: 'About' },

]

const profiles = [
  {
    id: 1,
    jobTitle: 'Python Developer',
    type: 'core',
    positionVacant: '25',
    staffLeasingOpportunity: true
  },
  {
    id: 2,
    jobTitle: 'PhP Developer',
    type: 'core',
    positionVacant: '3',
    staffLeasingOpportunity: false
  },
  {
    id: 3,
    jobTitle: 'Java Developer',
    type: 'rare',
    positionVacant: '999',
    staffLeasingOpportunity: false
  },
]

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header config={navConfig} />
        {/* <Header  /> */}
        <Profiles items={profiles} />
      </div>
    )
  }
}

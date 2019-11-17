import React from 'react';
import Header from './components/Header'
import SideBar from './components/Sidebar/SideBar'
import MainContainer from './components/MainContainer'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showSideBar: true,
      btnTxt: "Nascondi"
    }
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }


  toggleNavbar() {
    this.setState({
      showSideBar: !this.state.showSideBar,
      btnTxt: this.state.showSideBar ? 'Mostra' : 'Nascondi '
    })
  }

  render() {
    return (
      <>
        <Header
          className="App-header" triggerParentSidebarUpdate={this.toggleNavbar}
          btnText={this.state.btnTxt}
        />
        <div className="App-wrapper">
          <SideBar
            className="App-sidebar"
            show={this.state.showSideBar}
          />
          <MainContainer className="App-MainContainer"
          />
        </div>
      </>
    );
  }
}

export default App;

import React from 'react';
import Header from './components/Header'
import ButtonGeneric from './components/ButtonGeneric'
import SideBar from './components/Sidebar/SideBar'
import MainContainer from './components/MainContainer'
import './App.css';
import Todo from './components/Todo/Todo';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showSideBar: true,
      btnTxt: "Nascondi",
      showTodoList: false,
      

    }
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.showTodoList = this.showTodoList.bind(this);
  }


  toggleNavbar() {
    this.setState({
      showSideBar: !this.state.showSideBar,
      btnTxt: this.state.showSideBar ? 'Mostra' : 'Nascondi '
    })
  }

  triggerFullScreenTodoList() {
    alert('ciao mba')
  }
  showTodoList() {
    this.setState({
      showTodoList : !this.state.showTodoList
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
          >
            <ButtonGeneric text="Organizer" onclick={this.showTodoList} />
          </SideBar>
          <MainContainer className="App-MainContainer">
            <Todo show={this.state.showTodoList} />
          </MainContainer>
        </div>
      </>
    );
  }
}

export default App;

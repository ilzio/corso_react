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
    // binding this to the object 
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.showTodoList = this.showTodoList.bind(this);
  }

// make sidebar appear/disappear
  toggleNavbar() {
    this.setState({
      showSideBar: !this.state.showSideBar,
      btnTxt: this.state.showSideBar ? 'Mostra' : 'Nascondi '
    })
  }

  // toggles a todo list and renders it conditionally inside the maincontainer -> probably wrong way to do it 
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
            {/* button has been made generic and takes two props: the onclick function to be nested and the text it should display  */}
            {/* ButtonGeneric is nested inside its parent component Sidebar. In order to make it appear, inside parent it is necessary to use props.children */}
            <ButtonGeneric text="Organizer" onclick={this.showTodoList} />
          </SideBar>
          <MainContainer className="App-MainContainer">
            {/* another example of nested component */}
            <Todo show={this.state.showTodoList} />
          </MainContainer>
        </div>
      </>
    );
  }
}

export default App;

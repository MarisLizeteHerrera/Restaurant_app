import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Menu from './components/Menu';
import Menus from './components/Menus';
// import MenuForm from './components/MenuForm';
import { Container, } from "semantic-ui-react";

class App extends Component {
    state = { menus: [
      { id: 1, name: "Breakfast" },
      { id: 2, name: "Lunch" },
      { id: 3, name: "Dinner" },
      { id: 4, name: "Snacks" },
    ], }
  
    componentDidMount() {
      // TODO make a call to our rails server to get Items
    }
  
    // addItem = (name) => {
    //   // TODO make api call to rails server to add item
    //   // TODO update state
    // }
  
    // updateTodo = (id) => {
    //   // TODO make api call to update todo
    //   // TODO update state
    // }
  
    // deleteTodo = (id) => {
    //   // TODO make api call to delete todo
    //   // TODO remove it from state
    // }
  
    render() {
      return (
        <Container style={{ padding: "30px 0" }}>
          {/* <TodoForm addItem={this.addItem} /> */}
          <br />
          <br />
          <Menus
            menus={this.state.menus}
          />
        </Container>
      );
    }
  }
  
  export default App;
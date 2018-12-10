import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Menu from './components/Menu';
import Menus from './components/Menus';
// import MenuForm from './components/MenuForm';
import { Container, } from "semantic-ui-react";
import axios from "axios"

class App extends Component {
    state = { 
      menus: [],
    }
  
    componentDidMount() {
      axios.get(`/api/menus`)
      .then(res => {
        console.log(res.data);
        this.setState({ menus: res.data })  
      }).catch(err => {
        console.log(err)
      });
    }

  
    addItem = (name) => {
      axios.post('/api/menus', { name, })
      .then( res => {
      const { menus } = this.state;
      this.setState({ menus: [...menus, res.data] });
      })
    }
  
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
            // updateMenu={this.updateMenu}
            // deleteMenu={this.deleteMenu}
          />
        </Container>
      );
    }
  }
  
  export default App;
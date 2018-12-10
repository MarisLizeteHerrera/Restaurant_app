import React, {Component} from 'react';
import { Container, Header, Segment, } from 'semantic-ui-react';

// ({ id, name, start_date, end_date, updateTrip, deleteTrip })

class Menu extends Component {
  state = { 
    items: [
      { menu_id: 1, id: 1, name: "Waffles", price: "2.50" },
      { menu_id: 1, id: 2, name: "Pancakes", price: "2.50" },
      { menu_id: 1, id: 3, name: "Breakfast Burrito", price: "3.50" },
      { menu_id: 1, id: 4, name: "Eggs N Bacon", price: "3.50" },
    ],
  }

  render() {
    return (
      <Segment>
        <Header as='h1'>{ this.props.name }</Header>
        {
          /*
            Display each menu item as an li or something
          */
        }
      </Segment>
    );
  }
}

export default Menu;

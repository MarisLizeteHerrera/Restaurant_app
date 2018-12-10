import React, {Component} from 'react';
import { Container, Header, Segment, } from 'semantic-ui-react';

// ({ id, name, start_date, end_date, updateTrip, deleteTrip })

class Trip extends Component {

  render() {
    return (
      <Segment>
        <Header as='h1'>Name: { this.props.name }</Header>
        {
          /*
            Display each menu item as an li or something
          */
        }
      </Segment>
    );
  }
}

export default Trip;

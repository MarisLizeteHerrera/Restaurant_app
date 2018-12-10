import React, { Component } from 'react';
import Menu from './Menu';
import { Segment, } from 'semantic-ui-react';

// const Menus = ({ menus }) => (
//   <Menu />
// )

// const Menus = ({ menus }) => {
//   menus.map(menu => 
//     <h1>Menu { menu.name }</h1>  
//   )
// }

const Menus = ({ menus }) => (
  <div>
    <h1>Menus</h1>
    <Segment>
      { menus.map( menu => 
          <Menu
            key={menu.id}
            {...menu}
          />
        )
      }
      </Segment>
  </div>
)

export default Menus;

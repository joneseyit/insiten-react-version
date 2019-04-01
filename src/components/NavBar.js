import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu stackable inverted>
          <Menu.Item as={Link} to='/'>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOhU1vPfyrJ08lZx74_rcgfdHNucRbQ6MnZg2F0JnPBQSIokA"
              alt="Growth arrow"
            />
          </Menu.Item>
          <Menu.Item as={Link} to='/dashboard'>
            Dashboard
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default NavBar;

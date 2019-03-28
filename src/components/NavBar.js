import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu stackable inverted>
          <Menu.Item>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOhU1vPfyrJ08lZx74_rcgfdHNucRbQ6MnZg2F0JnPBQSIokA"
              alt="Growth arrow"
            />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default NavBar;

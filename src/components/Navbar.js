import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = { activeItem: window.location.pathname
        .slice(1)
        .split("/")
        .pop()
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });


  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted attached>
        <Menu.Item
          name="home"
          as={Link}
          to="/"
          active={activeItem === ""}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="about"
          as={Link}
          to="/about"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="users"
          as={Link}
          to="/users"
          active={activeItem === "users"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

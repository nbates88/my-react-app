import React, { Component } from 'react';
import Title from "./Header/Title";

class Header extends Component {
  render() {
    return (
     <Title title={this.props.title} />
    );
  }
}

export default Header;

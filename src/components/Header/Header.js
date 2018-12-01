import React, { Component } from "react";
import { Intro } from "./Intro";
import { NavBar } from "./NavBar";
export class Header extends Component {
  render() {
    return (
      <div>
        <div className="bg">
          <img src="../../img/background2.jpg" alt="background" />
        </div>
        <Intro />
        <NavBar onClick={this.props.onClick} current={this.props.current} />
      </div>
    );
  }
}

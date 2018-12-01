import React, { Component } from "react";
import { Intro } from "./Intro";
import { NavBar } from "./NavBar";
import background from "../../img/background2.jpg";
export class Header extends Component {
  render() {
    return (
      <div>
        <div className="bg">
          <img src={background} alt="background" />
        </div>
        <Intro />
        <NavBar onClick={this.props.onClick} current={this.props.current} />
      </div>
    );
  }
}

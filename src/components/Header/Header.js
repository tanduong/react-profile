import React, { Component } from "react";
import { Intro } from "./Intro";
import { NavBar } from "./NavBar";
export class Header extends Component {
  render() {
    return (
      <div>
        <div className="bg">
          <img src={this.props.data.bg} alt="background" />
        </div>
        <Intro name={this.props.data.name} title={this.props.data.title} />
        <NavBar onClick={this.props.onClick} current={this.props.current} />
      </div>
    );
  }
}

import React, { Component } from "react";
import { NavButton } from "./NavButton";

export class NavBar extends Component {
  render() {
    let navLinks = [
      "Profile",
      "Education",
      "Skills",
      "Work Experience",
      "Projects"
    ];
    return (
      <div className="navbar">
        {navLinks.map(title => (
          <NavButton
            title={title}
            onClick={this.props.onClick}
            curr={title === this.props.current}
          />
        ))}
      </div>
    );
  }
}

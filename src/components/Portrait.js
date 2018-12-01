import React, { Component } from "react";
import portrait from "../img/portrait.jpg";
export class Portrait extends Component {
  render() {
    return <img className="portrait" src={portrait} alt="" />;
  }
}

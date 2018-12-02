import React, { Component } from "react";
export class Portrait extends Component {
  render() {
    return <img className="portrait" src={this.props.src} alt="" />;
  }
}

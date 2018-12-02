import React, { Component } from "react";

export class Intro extends Component {
  render() {
    return (
      <div>
        <div className="name">{this.props.name}</div>
        <div className="desc">{this.props.title}</div>
      </div>
    );
  }
}

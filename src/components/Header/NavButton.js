import React, { Component } from "react";

export class NavButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.onClick(this.props.title);
  }
  render() {
    return (
      <div
        onClick={this.handleClick}
        className={this.props.curr ? "currTab" : ""}
      >
        {this.props.title}
      </div>
    );
  }
}

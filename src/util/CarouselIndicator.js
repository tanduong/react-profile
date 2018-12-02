import React, { Component } from "react";
export class CarouselIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: this.props.pos
    };
  }
  handleClick = e => {
    if (!this.props.active) {
      this.props.onClick(this.state.pos);
    }
  };
  render() {
    return (
      <span
        onClick={this.handleClick}
        className={"carousel-indicator" + (this.props.active ? " active" : "")}
      />
    );
  }
}

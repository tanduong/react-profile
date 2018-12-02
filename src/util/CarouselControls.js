import React, { Component } from "react";
import { CarouselControlIcon } from "./CarouselControlIcon";
export class CarouselControls extends Component {
  render() {
    let controlClass =
      this.props.to === "left"
        ? "carousel-control-left"
        : "carousel-control-right";
    return (
      <div
        onClick={this.props.onClick}
        className={"carousel-control " + controlClass}
      >
        <CarouselControlIcon dir={this.props.to} />
      </div>
    );
  }
}

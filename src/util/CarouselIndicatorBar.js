import React, { Component } from "react";
import { CarouselIndicator } from "./CarouselIndicator";
export class CarouselIndicatorBar extends Component {
  render() {
    let ind = [];
    for (let i = 0; i < this.props.len; i++) {
      ind.push(
        <CarouselIndicator
          key={i}
          pos={i}
          active={i === this.props.current}
          onClick={this.props.onClick}
        />
      );
    }
    return <div className="carousel-indicator-bar">{ind}</div>;
  }
}

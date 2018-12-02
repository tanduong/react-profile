import React, { Component } from "react";
export class CarouselInner extends Component {
  render() {
    return <div className="carousel-inner">{this.props.children}</div>;
  }
}

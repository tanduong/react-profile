import React, { Component } from "react";
export class CarouselControlIcon extends Component {
  render() {
    return <span className={"carousel-control-icon-" + this.props.dir} />;
  }
}

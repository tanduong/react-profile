import React, { Component } from "react";
import { CarouselInner } from "./CarouselInner";
import { CarouselControls } from "./CarouselControls";
import { CarouselIndicatorBar } from "./CarouselIndicatorBar";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }
  changeItem = index => {
    this.setState({
      current: index
    });
  };
  render() {
    let len = this.props.children.length;
    return (
      <div className="carousel">
        <CarouselInner>{this.props.children[this.state.current]}</CarouselInner>
        {this.props.showControls && (
          <CarouselControls
            to="left"
            onClick={() => {
              if (this.state.current > 0)
                this.changeItem(this.state.current - 1);
              else this.changeItem(len - 1);
            }}
          />
        )}
        {this.props.showControls && (
          <CarouselControls
            to="right"
            onClick={() => {
              if (this.state.current < len - 1)
                this.changeItem(this.state.current + 1);
              else this.changeItem(0);
            }}
          />
        )}
        {this.props.showIndicator && (
          <CarouselIndicatorBar
            len={len}
            current={this.state.current}
            onClick={this.changeItem}
          />
        )}
      </div>
    );
  }
}
export default Carousel;

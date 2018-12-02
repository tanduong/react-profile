import React, { Component } from "react";

class CarouselInner extends Component {
  render() {
    return <div className="carousel-inner">{this.props.children}</div>;
  }
}

class CarouselControlIcon extends Component {
  render() {
    return <span className={"carousel-control-icon-" + this.props.dir} />;
  }
}

class CarouselControls extends Component {
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
class CarouselIndicator extends Component {
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
class CarouselIndicatorBar extends Component {
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

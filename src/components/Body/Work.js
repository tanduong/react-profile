import React, { Component } from "react";
export class Work extends Component {
  render() {
    return (
      <div className="hori-card">
        <div className="row">
          <div className="school">{this.props.company}</div>
          <div className="time">{this.props.time}</div>
        </div>

        <div className="degree">{this.props.position}</div>
        <div className="degree-desc">
          {this.props.desc.split("\n").map(function(item, key) {
            return (
              <span key={key}>
                {item}
                <br />
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

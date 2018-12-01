import React, { Component } from "react";
export class School extends Component {
  render() {
    return (
      <div className="hori-card">
        <div className="row">
          <div className="school">{this.props.school}</div>
          <div className="time">{this.props.time}</div>
        </div>

        <div className="degree">{this.props.degree}</div>
        <div className="gpa">{this.props.GPA + " GPA"}</div>
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

import React, { Component } from "react";
export class ProfileCard extends Component {
  render() {
    return (
      <div className="profile-card">
        <div className="profile-icon">
          <img src={this.props.img} alt="" />
        </div>
        <div className="profile-text">{this.props.text}</div>
      </div>
    );
  }
}

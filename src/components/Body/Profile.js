import React, { Component } from "react";
import { ProfileCard } from "./ProfileCard";

export class Profile extends Component {
  render() {
    let data = this.props.data;
    return (
      <div>
        {data.map(entry => (
          <ProfileCard img={entry.img} text={entry.text} />
        ))}
      </div>
    );
  }
}

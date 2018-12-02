import React, { Component } from "react";
import { School } from "./School";

export class Education extends Component {
  render() {
    let data = this.props.data;
    return (
      <div>
        {data.map(entry => (
          <School
            school={entry.school}
            time={entry.time}
            degree={entry.degree}
            GPA={entry.GPA}
            desc={entry.desc}
          />
        ))}
      </div>
    );
  }
}

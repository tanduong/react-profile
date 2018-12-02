import React, { Component } from "react";
import { Work } from "./Work";

export class WorkExp extends Component {
  render() {
    let data = this.props.data;
    return (
      <div>
        {data.map(entry => (
          <Work
            company={entry.company}
            time={entry.time}
            position={entry.position}
            desc={entry.desc}
          />
        ))}
      </div>
    );
  }
}

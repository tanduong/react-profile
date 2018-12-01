import React, { Component } from "react";

let data = [
  {
    img: "../../img/programming.png",
    text:
      "Final - year student in Computer Engineering with keen interests in software engineering"
  },
  {
    img: "../../img/problem-solving.png",
    text:
      "Possess strong problem solving and analytical skills with great attention to details"
  },
  {
    img: "../../img/individual.png",
    text:
      "Organized, self-motivated individual, who can work well under pressure, both independently and in a team"
  },
  {
    img: "../../img/job.png",
    text:
      "Aspiring to gain relevant experience and skills through technical entry-level jobs and internships"
  }
];
class ProfileCard extends Component {
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
export class Profile extends Component {
  render() {
    return (
      <div>
        {data.map(entry => (
          <ProfileCard img={entry.img} text={entry.text} />
        ))}
      </div>
    );
  }
}

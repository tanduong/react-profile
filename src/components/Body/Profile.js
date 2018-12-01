import React, { Component } from "react";
import { ProfileCard } from "./ProfileCard";

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

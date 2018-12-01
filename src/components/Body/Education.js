import React, { Component } from "react";
import { School } from "./School";
let data = [
  {
    school: "National University of Singapore",
    time: "2013 to present",
    degree: "Bachelor of Engineering - Computer Engineering",
    GPA: "4.61/5.0",
    desc:
      "In Dean's List for top 5% academic performance of cohort in 2 semesters\nASEAN Undergraduate Scholarship"
  },
  {
    school: "NUS High School of Math and Science",
    time: "2009 - 2012",
    degree: "NUS High School Diploma",
    GPA: "4.7/5.0",
    desc:
      "Diploma with High Distinction, with Honours in Mathematics, Physics and Chemistry"
  }
];
export class Education extends Component {
  render() {
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

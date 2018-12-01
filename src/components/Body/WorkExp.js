import React, { Component } from "react";
import { Work } from "./Work";

let data = [
  {
    company: "Floating Cube Studios",
    time: "Jan 2016 – July 2016",
    position: "Software Engineering Intern",
    desc:
      "Maintaining and developing software for EPOS - a point-of-sale system\n\
      Analysed requirements from customers to come up with design for their features\n\
      Languages used: Python, XHTML, CSS, JavaScript"
  },
  {
    company: "VietAbroader ILead Workshop Series",
    time: "June 2014 – July 2014",
    position: "Logistics Assistant Manager",
    desc:
      "Devise and execute logistical plan for the 6-day leadership workshop\n\
      Managed the treasury operations and maintained financial records of the project\n\
      Researched options for venues and prepared materials for the workshop"
  },
  {
    company: "NUS Faculty of Arts and Social Sciences",
    time: "September 2013 – November 2013",
    position: "Data Entry and Analysis Research Assistant",
    desc:
      "Recorded survey responses for a decision-making research\n\
      Compiled and ensured the accuracy and consistency of work done by other operators\n\
      Performed simple analysis of the data using Microsoft Excel"
  }
];
export class WorkExp extends Component {
  render() {
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

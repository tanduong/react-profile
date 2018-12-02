/* eslint-disable no-multi-str */
import React, { Component } from "react";
import "./App.css";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { Portrait } from "./components/Portrait";

const data = {
  header: {
    bg: "/img/background2.jpg",
    name: "Lê Vũ Khánh Toàn",
    title: "Aspiring Software Engineer | Front-end Developer"
  },
  portrait: "/img/portrait.jpg",
  profile: [
    {
      img: "/img/programming.png",
      text:
        "Final - year student in Computer Engineering with keen interests in software engineering"
    },
    {
      img: "/img/problem-solving.png",
      text:
        "Possess strong problem solving and analytical skills with great attention to details"
    },
    {
      img: "/img/individual.png",
      text:
        "Organized, self-motivated individual, who can work well under pressure, both independently and in a team"
    },
    {
      img: "/img/job.png",
      text:
        "Aspiring to gain relevant experience and skills through technical entry-level jobs and internships"
    }
  ],
  edu: [
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
  ],
  "work-exp": [
    {
      company: "Floating Cube Studios",
      time: "Jan 2016 – Jul 2016",
      position: "Software Engineering Intern",
      desc:
        "Maintaining and developing software for EPOS - a point-of-sale system\n\
      Analysed requirements from customers to come up with design for their features\n\
      Languages used: Python, XHTML, CSS, JavaScript"
    },
    {
      company: "VietAbroader ILead Workshop Series",
      time: "Jun 2014 – Jul 2014",
      position: "Logistics Assistant Manager",
      desc:
        "Devise and execute logistical plan for the 6-day leadership workshop\n\
      Managed the treasury operations and maintained financial records of the project\n\
      Researched options for venues and prepared materials for the workshop"
    },
    {
      company: "NUS Faculty of Arts and Social Sciences",
      time: "Sepr 2013 – Nov 2013",
      position: "Data Entry and Analysis Research Assistant",
      desc:
        "Recorded survey responses for a decision-making research\n\
      Compiled and ensured the accuracy and consistency of work done by other operators\n\
      Performed simple analysis of the data using Microsoft Excel"
    }
  ]
};
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { title: "Profile" };
  }
  changeContent(value) {
    this.setState({
      title: value
    });
  }
  render() {
    return (
      <div className="App">
        <Header
          onClick={this.changeContent.bind(this)}
          current={this.state.title}
          data={data.header}
        />
        <Portrait src={data.portrait} />
        <Body title={this.state.title} data={data} />
      </div>
    );
  }
}

export default App;

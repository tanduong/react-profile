import React, { Component } from "react";
import { Profile } from "./Profile";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { WorkExp } from "./WorkExp";
import { Projects } from "./Projects";

export class Body extends Component {
  render() {
    let content;
    // eslint-disable-next-line default-case
    switch (this.props.title) {
      case "Profile":
        content = <Profile data={this.props.data.profile} />;
        break;
      case "Education":
        content = <Education data={this.props.data.edu} />;
        break;
      case "Skills":
        content = <Skills />;
        break;
      case "Work Experience":
        content = <WorkExp data={this.props.data["work-exp"]} />;
        break;
      case "Projects":
        content = <Projects />;
        break;
    }

    return (
      <main>
        <div className="title">{this.props.title}</div>
        <div className="content">{content}</div>
      </main>
    );
  }
}

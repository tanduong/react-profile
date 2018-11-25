import React, { Component } from "react";
import "./App.css";
import { NavBar } from "./NavBar";
import { Body } from "./Body";
import { Footer } from "./Footer";
import background from "./background2.jpg";
import { Intro } from "./Intro";

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
        <img src={background} alt="background" />
        <Intro />
        <NavBar
          onClick={this.changeContent.bind(this)}
          current={this.state.title}
        />
        <Body title={this.state.title} />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import { Intro } from "./Intro";
import { NavBar } from "./NavBar";
import { Body } from "./Body";
import { Footer } from "./Footer";
import background from "./background2.jpg";
import portrait from "./portrait.jpg";

class Portrait extends Component {
  render() {
    return <img className="portrait" src={portrait} alt="" />;
  }
}
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
        <div className="bg">
          <img src={background} alt="background" />
        </div>
        <Intro />
        <Portrait />
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

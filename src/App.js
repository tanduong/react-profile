import React, { Component } from "react";
import "./App.css";
import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";
import { Portrait } from "./components/Portrait";

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
        />
        <Portrait />
        <Body title={this.state.title} />

        <Footer />
      </div>
    );
  }
}

export default App;

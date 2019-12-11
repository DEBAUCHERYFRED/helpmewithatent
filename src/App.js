import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import About from "./components/about";
import TechStack from "./components/tech-stack";

import BoozAllen from "./components/projects/booz-allen";
import CardConnect from "./components/projects/card-connect";
import Comcast from "./components/projects/comcast";
import Express from "./components/projects/express";
import Hexagon from "./components/projects/hexagon";
import DigitalHarmonic from "./components/projects/digitalharmonic";
import Vertex from "./components/projects/vertex";

import "./App.css";
import HelpAHomelessAmerican from "./components/projects/helpahomelessamerican";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <About />
        <Footer />
      </div>
    );
  }
}

export default App;

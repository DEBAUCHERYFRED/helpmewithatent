import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";

import "./App.css";

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

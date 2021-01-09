import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Showcase from "./components/Showcase";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <Projects />
      <About />
    </div>
  );
}



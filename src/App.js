import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Showcase from "./components/Showcase";

export default function App(props) {
  console.log(props)
  return (
    <div className="App">
        
          <Showcase />
          <Projects />
          <About />
          <Footer />
    </div>
  );
}




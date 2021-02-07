import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Showcase from "./components/Showcase";
import Background from "./components/Background";
import AnimatedCursor from "react-animated-cursor";
export default function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={12}
        outerSize={32}
        color='0, 128, 128'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
       />
      <Background />
      <Header />
      <Showcase />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}




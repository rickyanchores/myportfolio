import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Showcase from "./components/Showcase";
import Background from "./components/Background";

export default function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Showcase />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}




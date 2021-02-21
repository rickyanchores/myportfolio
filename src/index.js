import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles.css";
import reportWebVitals from './reportWebVitals';
import Projects from './components/Projects';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Background from "./components/Background";
import AnimatedCursor from "react-animated-cursor";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AnimatedCursor
          innerSize={12}
          outerSize={32}
          color='0, 128, 128'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />
        <Header />
        <Background />
      <Switch>
        <Route path ='/' exact render={(props)=><App {...props}/>}/>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

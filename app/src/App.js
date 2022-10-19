import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./components/home"
import Comp from "./components/testcomponent"
import Launcher from "./components/Launcher"

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
			<Route path="/app" component={Home} />
            <Route path="/home" component={Base} />
            <Route path="/about" component={About} />
            <Route path="/test" component={Comp} />
            <Route path="/" component={Launcher} exact />
      </HashRouter>
    );
  }
}

const Base = () => <div><h1>Base</h1></div>
const About = () => <div><h2>About</h2></div>

export default App;

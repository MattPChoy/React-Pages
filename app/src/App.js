import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home"
import Comp from "./components/testcomponent"
import Launcher from "./components/Launcher"

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
            <Switch>
            <Route exact strict path="/" component={Base}/>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/test" component={Comp} />
            </Switch>
      </HashRouter>
    );
  }
}

const Base = () => <div><h1>Base</h1><a href="#/about">about</a></div>
const About = () => <div><h2>About</h2><a href="/">back</a></div>

export default App;

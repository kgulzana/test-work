import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import data from "./data";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

export const FormContext = React.createContext();
function App() {
  return (
    <div className="wrapper">
      <Router>
        <Sidebar className="sidebar" />
        <div className="content">
          <Switch>
            <Route path="/about" component={AboutMe}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/skills" component={Skills}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

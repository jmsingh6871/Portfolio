import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom' 
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container app_container">
        <div className="row app_row">
          <div className="col-lg-3">
              <Sidebar />
          </div>
          <div className="col-lg-9 app_main-content">
            {/* navbar */}
            <Navbar/>
            <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;

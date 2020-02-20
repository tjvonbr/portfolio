import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Home from '../src/pages/Home';
import Projects from '../src/pages/Projects';
import ProjectData from '../src/data/ProjectData'
import './App.css';

const App = () => {
  const projects = ProjectData
  const comake = projects.comake

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutme" component={About} />
        <Route exact path="/projects/comake"
          render={(props) =>  (<Projects {...props} data={comake} />)
          }
        />
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

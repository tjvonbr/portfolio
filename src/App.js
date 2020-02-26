import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Home from '../src/pages/Home';
import Projects from '../src/pages/Projects';
import Project from '../src/components/Project';
import ProjectData from '../src/data/ProjectData';
import './App.css';

const App = () => {
  const projectData = ProjectData

  const [projects, setProjects] = useState(projectData);
  console.log('STATE', projects)

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutme" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects/:projectId" render={
          props => <Project {...props} projects={projects}  />}
        />
      </Switch>
    </Router>
  );
}

export default App;

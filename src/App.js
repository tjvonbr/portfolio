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
  // Setting the project data to state to pass around as props
  const projectData = ProjectData
  const [projects, setProjects] = useState(projectData);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutme" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects/:projectId" render={
          props => <Project {...props} {...projects.find(project => project.id === props.match.params.projectId)} />}
        />
      </Switch>
    </Router>
  );
}

export default App;

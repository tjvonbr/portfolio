/** @jsx jsx **/

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { jsx } from '@emotion/core';
import NavBarLink from '../components/NavBarLink';
import Project from '../components/Project';

// Font size for subnavigation
const fontSize = '1.6rem'

const ProjectNavBar = props => {
  console.log("PROJECTNAVBAR PROPS:", props)
  
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '0px auto',
        height: '50px',
        width: '40%',
      }}
    >
      <NavBarLink 
        {...props}
        path={`${props.url}/comake`}
        page="Co-Make" 
        fontSize={fontSize}
      />
      <NavBarLink
        {...props}
        path={`${props.url}/wanderlust`}
        page="Wanderlust"
        fontSize={fontSize} 
      />
      <NavBarLink 
        {...props}
        path={`${props.url}/splitthebill`}
        page="Split the Bill" 
        fontSize={fontSize} 
      />

      <Switch>
        <Route 
          exact path={`${props.path}/:topicId`}
          component={Project}  
         />
      </Switch>
    </div>
  )
};

export default ProjectNavBar; 
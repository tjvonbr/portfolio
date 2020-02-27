/** @jsx jsx **/

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { jsx } from '@emotion/core';
import NavBarLink from '../components/NavBarLink';
import facepaint from 'facepaint';

// Media queries
const mq = facepaint([
  '@media(max-width: 1200px)',
  '@media(max-width: 992px)',
  '@media(max-width: 768px)'
])

// Font size for subnavigation
const fontSize = '1.8rem'

const linkBorder = '1px solid black'

const ProjectNavBar = props => {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0px auto',
        width: '100%%',
      }}
    >
      <NavBarLink 
        {...props}
        path={'projects/comake'}
        page="Co-Make" 
        fontSize={fontSize}
        borderRight={linkBorder}
        padding={'10px'}
        margin={'0px'}
      />
      <NavBarLink
        {...props}
        path={'projects/wanderlust'}
        page="Wanderlust"
        fontSize={fontSize}
        borderRight={linkBorder}
        padding={'10px'}
        margin={'0px'}
      />
      <NavBarLink 
        {...props}
        path={'projects/splitthebill'}
        page="Split the Bill" 
        fontSize={fontSize}
        padding={'10px'}
        margin={'0px'}
      />
    </div>
  )
};

export default ProjectNavBar; 
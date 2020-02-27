/** @jsx jsx **/

import React from 'react';
import { jsx } from '@emotion/core';
import NavBarLink from '../components/NavBarLink';
import facepaint from 'facepaint';

// Media queries
const mq = facepaint([
  '@media(max-width: 1200px)',
  '@media(max-width: 992px)',
  '@media(max-width: 768px)',
])

const fontSize = '1.8rem';

const NavBar = () => {
  return (
    <div
      css={mq({
        display: 'flex',
        position: ['absolute', 'absolute', 'relative'],
        top: ['0px'],
        width: ['20%', '30%', '40%'],
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottom: '1px solid black',
      })}
    >
      <NavBarLink 
        path="/aboutme" 
        page="About" 
        fontSize={fontSize}
        padding={'0px'}
        margin={'10px 10px'} 
      />
      <NavBarLink 
        exact path="/projects" 
        page="Projects" 
        fontSize={fontSize}
        padding={'0px'}
        margin={'10px 10px'}  
      />
      <NavBarLink 
        path="/contact" 
        page="Contact" 
        fontSize={fontSize} 
        padding={'0px'}
        margin={'10px 10px'} 
      />
    </div>
  )
};

export default NavBar; 
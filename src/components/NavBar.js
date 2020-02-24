/** @jsx jsx **/

import React from 'react';
import { jsx } from '@emotion/core';
import NavBarLink from '../components/NavBarLink';
import facepaint from 'facepaint';

// Media queries
const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 920px)',
  '@media(min-width: 1120px)'
], { literal: true }, { overlap: true })

const fontSize = '1.8rem'

const NavBar = () => {
  return (
    <div
      css={{
        position: 'absolute',
        top: '0px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        borderBottom: '1px solid black',
        width: ['50%', '35%', '20%']
      }}
    >
      <NavBarLink path="/aboutme" page="About" fontSize={fontSize} />
      <NavBarLink path="/projects" page="Projects" fontSize={fontSize} />
      <NavBarLink path="/contact" page="Contact" fontSize={fontSize} />
    </div>
  )
};

export default NavBar; 
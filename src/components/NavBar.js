/** @jsx jsx **/

import React from 'react';
import { jsx } from '@emotion/core';
import NavBarLink from '../components/NavBarLink';
import facepaint from 'facepaint';

// Media queries
const mq = facepaint([
  '@media(max-width: 1200px)',
  '@media(max-width: 992px)',
  '@media(max-width: 768px)'
])

const fontSize = '1.8rem'

const NavBar = () => {
  return (
    <div
      css={mq({
        display: 'flex',
        position: ['absolute', 'absolute', 'relative'],
        top: ['0px'],
        width: ['30%', '40%', '50%'],
        justifyContent: 'space-around',
        alignItems: 'center',
        justifySelf: 'end',
        borderBottom: '1px solid black',
      })}
    >
      <NavBarLink path="/aboutme" page="About" fontSize={fontSize} />
      <NavBarLink exact path="/projects" page="Projects" fontSize={fontSize} />
      <NavBarLink path="/contact" page="Contact" fontSize={fontSize} />
    </div>
  )
};

export default NavBar; 
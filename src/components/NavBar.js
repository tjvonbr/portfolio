/** @jsx jsx **/

import React from 'react';
import { jsx } from '@emotion/core';
import NavBarLink from '../components/NavBarLink';

const fontSize = '1.8rem'

const NavBar = () => {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottom: '1px solid black',
        margin: '0px auto',
        marginTop: '10px',
        height: '50px',
        width: '50%',
      }}
    >
      <NavBarLink path="/aboutme" page="About" fontSize={fontSize} />
      <NavBarLink path="/projects" page="Projects" fontSize={fontSize} />
      <NavBarLink path="/contact" page="Contact" fontSize={fontSize} />
    </div>
  )
};

export default NavBar; 
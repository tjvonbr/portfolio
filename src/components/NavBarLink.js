/** @jsx jsx **/

import React from 'react';
import { NavLink } from 'react-router-dom';
import { jsx } from '@emotion/core';

const NavBarLink = props => {
  return (
    <NavLink to={props.path} 
      css={{
        fontSize: `${props.fontSize}`,
        color: 'black',
        textDecoration: 'none',
        padding: '0px',
        margin: '10px 10px',
        '&:hover': {
          textDecoration: 'underline',
        }
      }}
      activeStyle={{
        fontWeight: '800'
      }}
    >
      {props.page}
    </NavLink>
  )
};

export default NavBarLink;
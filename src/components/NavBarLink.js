/** @jsx jsx **/

import React from 'react';
import { NavLink } from 'react-router-dom';
import { jsx } from '@emotion/core';

const NavBarLink = props => {
  return (
    <NavLink to={props.path} 
      css={{
        fontSize: `${props.fontSize}`,
        borderRight: `${props.borderRight}`,
        borderLeft: `${props.borderLeft}`,
        color: 'black',
        textDecoration: 'none',
        padding: `${props.padding}`,
        margin: `${props.margin}`,
        '&:hover': {
          textDecoration: 'underline',
        },
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
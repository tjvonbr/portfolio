/** @jsx jsx **/

import React from 'react';
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/core';

const NavBarLink = props => {
  return (
    <Link to={props.path} 
      css={{
        color: 'black',
        textDecoration: 'none',
        padding: '0px',
        margin: '10px 10px',
        '&:hover': {
          textDecoration: 'underline',
        }
      }}
    >
      {props.page}
    </Link>
  )
};

export default NavBarLink;
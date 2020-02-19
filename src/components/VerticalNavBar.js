/** @jsx jsx **/

import React from 'react';
import { jsx, css } from '@emotion/core';
import NavBarLink from '../components/NavBarLink';

const VerticalNavBar = () => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRight: '1px solid black',
        width: '35%',
      }}
    >
      <NavBarLink path="/projects/comake" page={"Co-Make"} />
      <NavBarLink path="/projects/wanderlust" page={"Wanderlust"} />
      <NavBarLink path="/projects/splitthebill" page={"Split the Bill"} />
    </div>
  )
}

export default VerticalNavBar;
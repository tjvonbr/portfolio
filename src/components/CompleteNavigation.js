/** @jsx jsx **/

import React, { Fragment } from 'react';
import { jsx } from '@emotion/core';
import facepaint from 'facepaint';
import NavBarLink from './NavBarLink';

// Media queries
const mq = facepaint([
  '@media(max-width: 1200px)',
  '@media(max-width: 992px)',
  '@media(max-width: 768px)',
])

const mainFont = '1.8rem';
const subFont = '1.6rem';

const CompleteNavigation = () => {
  return (
    <Fragment>
      {/* Main navigation */}
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
          fontSize={mainFont} 
          padding={'0px'}
          margin={'10px 10px'}
        />
        <NavBarLink 
          exact path="/projects" 
          page="Projects" 
          fontSize={mainFont}
          padding={'0px'}
          margin={'10px 10px'}  
        />
        <NavBarLink 
          path="/contact" 
          page="Contact" 
          fontSize={mainFont} 
          padding={'0px'}
          margin={'10px 10px'}  
        />
      </div>

      {/* Sub-navigation or project navigation */}
      <div
        css={mq({
          justifyContent: 'space-around',
          alignItems: 'center',
          position: ['absolute', 'absolute', 'relative'],
          top: ['50px', '50px', '10px'],
        })}
      >
        <NavBarLink 
          path="/projects/comake" 
          page="Co-Make" 
          fontSize={subFont} 
          padding={'0px'}
          margin={'10px 10px'}  
        />
        <NavBarLink 
          path="/projects/wanderlust" 
          page="Wanderlust" 
          fontSize={subFont} 
          padding={'0px'}
          margin={'10px 10px'}  
        />
        <NavBarLink 
          path="/projects/splitthebill" 
          page="Split the Bill" 
          fontSize={subFont} 
          padding={'0px'}
          margin={'10px 10px'} 
        />
      </div>
    </Fragment>
  )
};

export default CompleteNavigation;
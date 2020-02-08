/** @jsx jsx **/

import React from 'react';
import { Link } from 'react-router-dom';
import { jsx, css, keyframes } from '@emotion/core';

const fadeOut = keyframes`
  100% {opacity: 1;}
  0% {opacity: 0;}
`

const Home = () => {
  return (
    <div>
      <div 
        css={{
          margin: '0 auto',
          width: '30%',
          position: 'absolute',
          top: '35%',
          left: '37.5%',
        }}
      >
        <h1
          css={{
            borderBottom: '1px solid black',
            marginBottom: '0px',
            textAlign: 'center'
          }}
        >Trevor Von Bruenchenhein</h1>
        <ul
          css = {{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '0px',
            padding: '0px',
          }}
        >
          <Link to="/aboutme"
            css = {{
              color: 'black',
              textDecoration: 'none',
              padding: '0px',
              margin: '0px 10px',
              '&:hover': {
                textDecoration: 'underline',
              }
            }}
          >About Me</Link>
          <Link to="/projects"
            css = {{
              color: 'black',
              textDecoration: 'none',
              padding: '0px',
              margin: '0px 10px',
              '&:hover': {
                textDecoration: 'underline',
              }
            }}
          >Projects</Link>
          <Link to="/contact"
            css = {{
                color: 'black', 
                padding: '0px',
                margin: '0px 10px',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                }
              }}
          >Contact</Link>
        </ul>
      </div>
  </div>
  )
};

export default Home;
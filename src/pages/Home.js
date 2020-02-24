/** @jsx jsx **/

import React from 'react';
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/core';

const linkStyle = css({
  fontSize: '1.6rem',
  color: 'black',
  textDecoration: 'none',
  padding: '0px',
  margin: '0px 10px',
  '&:hover': {
    textDecoration: 'underline'
  }
})

const Home = () => {
  return (
    <div>
      <div 
        css={{
          position: 'fixed',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
        <h1
          css={{
            borderBottom: '1px solid black',
            marginBottom: '0px',
            textAlign: 'center',
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
            css={linkStyle}
          >About
          </Link>

          <Link to="/projects"
            css={linkStyle}
          >Projects
          </Link>

          <Link to="/contact"
            css={linkStyle}
          >Contact
          </Link>
          
        </ul>
      </div>
    </div>
  )
};

export default Home;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <img style={imageStyle} src={require('../header.png')}></img>
        <br></br>
        <Link style={linkStyle} to='/pokemons'>
          Pokemons
        </Link>{' '}
        |{' '}
        <Link style={linkStyle} to='/types'>
          Types
        </Link>{' '}
      </div>
    );
  }
}

const headerStyle = {
  testAlign: 'center',
  padding: '10px',
};

const imageStyle = {
  width: '30%',
  height: 'auto',
};

const linkStyle = {};

export default Navbar;

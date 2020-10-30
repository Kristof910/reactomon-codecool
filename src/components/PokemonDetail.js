import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

export class PokemonDetail extends Component {
  state = {
    pokemonDetails: [],
  };

  componentDidMount() {
    let apiLink = 'https://pokeapi.co/api/v2/pokemon/';
    let pokemonNumber = this.props.match.params.id;
    axios.get(apiLink.concat(pokemonNumber)).then((res) => {
      console.log('apiSpec:', res);
      this.setState({ pokemonDetails: res.data });
    });
  }

  render() {
    console.log('props:', this.props.match.params.id);
    return (
      <div>
        <ul>
          <p>{this.state.pokemonDetails.height}</p>
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;

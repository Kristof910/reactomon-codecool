import React, { Component } from 'react';
import PokemonDetail from './PokemonDetail';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class PokemonList extends Component {
  state = {
    pokemonList: [],
  };

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
      this.setState({ pokemonList: res.data.results });
    });
  }

  render() {
    console.log(this.state.pictureList);
    return (
      <div>
        <ul>
          {this.state.pokemonList.map((pokemon, index) => (
            <li>
              <img src=''></img>
              <Link to={'pokemon/' + (index + 1)}>{pokemon.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PokemonList;

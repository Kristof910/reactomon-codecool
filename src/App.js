import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import PokemonList from './components/PokemonList';
import TypeList from './components/TypeList';
import PokemonDetail from './components/PokemonDetail';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Navbar />
            <Route
              exact
              path='/pokemons'
              render={(props) => (
                <React.Fragment>
                  <PokemonList />
                </React.Fragment>
              )}
            ></Route>
            <Route
              exact
              path='/types'
              render={(props) => (
                <React.Fragment>
                  <TypeList />
                </React.Fragment>
              )}
            ></Route>
            <Route
              exact
              path='/pokemon/:id'
              component={PokemonDetail}
              /*render={(props) => (
                <React.Fragment>
                  <PokemonDetail />
                </React.Fragment>
              )}*/
            ></Route>
          </div>
        </div>
      </Router>
    );
  }
}

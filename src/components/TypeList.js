import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class TypeList extends Component {
  state = {
    typeList: [],
  };

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/type').then((res) => {
      this.setState({ typeList: res.data.results });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.typeList.map((type, index) => (
            <li>
              <img src=''></img>
              <Link to={'type/' + (index + 1)}>{type.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TypeList;

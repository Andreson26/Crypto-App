import React, { Component } from 'react';
import search from '../../Icons/Search.png'
//import magnifying from '../../Icons/Magnifying.svg'
import { Form, SearchIcon } from './HeaderInput.styles';

export default class HeaderInput extends Component {

    state = {
        inputValue: ""
    }

  render() {
    return (
      <Form>
        <SearchIcon src={search} alt="search" />
        <input 
          placeholder='Search...'
        />
      </Form>
    )
  }
}

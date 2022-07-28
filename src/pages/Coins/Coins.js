import React, { Component } from 'react';
import { StyledBody } from './coins.styles';
import CoinTable from '../../components/coinTable/CoinsTable/CoinsTable';
import axios from 'axios';

export default class Coins extends Component {
  state= {
    isLoading: false,
    hasError: false,
    coinList: []
  }

  getAllCoins =async()=> {
    this.setState({isLoading: true})
    try {
      const {data} = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
      this.setState({coinList: data, isLoading: false})
      //console.log(this.state.coinList)
    }catch(err) {
      this.setState({hasError: true, isLoading: false})
    }

  }

  componentDidMount() {
    this.getAllCoins()
  }

  render() {
    const { ...rest } = this.state;
    return (
      <StyledBody>
        <CoinTable 
          { ...rest }
        />
        
      </StyledBody>
    )
  }
}

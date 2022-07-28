import React from 'react'
import { DataTableContainer } from './CoinsTableData.styles'

export default function CoinsTableData({isLoading, hasError, coinList}) {
    console.log(coinList)
  return (
    <DataTableContainer>
        <thead>
            <tr>
                <th># Name</th>
                <th>Price</th>
                <th>1h%</th>
                <th>24h%</th>
                <th>7d%</th>
                <th>24h Volume/Marcket Cap</th>
                <th>Circulating/Total Supply</th>
                <th>Last 7d</th>
            </tr>
        </thead>
        <tbody>
            
                {coinList.map(coin => (
                    <tr key={coin.id}>
                        <td>{coin.market_cap_rank}</td>
                        <td>
                            <img src={coin.image} alt="coin" height={30}/>
                            <span>{coin.name} ({coin.symbol.toUpperCase()}) </span>
                        </td>
                        <td>${coin.current_price}</td>
                        <td>{coin.price_change_percentage_1h_in_currency}%</td>
                        <td>{coin.price_change_percentage_24h}%</td>
                        <td>{coin.price_change_percentage_24h_in_currency}%</td>
                        <td>{coin.total_volume} {coin.market_cap}</td>
                        <td>{coin.circulating_supply} {coin.total_supply}</td>
                        
                    </tr>
                
                ))}

        </tbody>

    </DataTableContainer> 
  )
}

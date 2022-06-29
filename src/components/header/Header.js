import React from 'react'
import { Link } from "react-router-dom"
import { NavBar } from './HeaderStyle'

function Header() {
  return (
    <NavBar>
        <h3>
            <Link to="/homepage">Coins</Link>
        </h3>

        <h3>
            <Link to="/portfolio">Porfolio</Link>
        </h3>

     {/*
        Link for each individual coin
        <h3>
            <Link to={`/${Coin}`}>Coin</Link>
        </h3>
    */}
    </NavBar>
  )
}

export default Header
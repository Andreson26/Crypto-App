import React from 'react'
import HeaderInput from '../HeaderInput/HeaderInput'
import NavLinks from '../NavLinks/NavLinks'
import ThemeToggler from '../ThemeToggler/ThemeToggler'
import ToggleCurrency from '../ToggleCurrency/ToggleCurrency'
import { StyleNavbar, RightNav } from './NavBar.style'

 function NavBar({ handleToggleDropdown, handleToggleTheme, dropdown }) {

    return (
      <StyleNavbar>
        <NavLinks />
          <RightNav>
            <HeaderInput />
            <ToggleCurrency 
              handleToggleDropdown={handleToggleDropdown} 
              dropdown={dropdown}/>
            <ThemeToggler handleToggleTheme={handleToggleTheme} />
          </RightNav>
          {/*<h3>
            <Link to={`/${Coin}`}>Coin</Link>
    </h3>*/}
      
      </StyleNavbar>
  
    
    )

  }

  export default NavBar;

  
  

  

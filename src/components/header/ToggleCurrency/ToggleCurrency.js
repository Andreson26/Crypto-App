import React from 'react'
import { CurrencyWrapper, ToggleWrapper, ArrowsWrapper, ArrowUp, ArrowDown } from './toggleCurrency.styles'
import Dropdown from './Dropdown'


export default function ToggleCurrency({handleToggleDropdown, dropdown}) {
    
    return (
      <ToggleWrapper>
        <CurrencyWrapper 
          onClick={handleToggleDropdown}
      >  
          <label>&#36;</label> 
          <h4>USD</h4>
          <ArrowsWrapper>
             { dropdown ? <ArrowUp /> : <ArrowDown/> }
          </ArrowsWrapper>
        </CurrencyWrapper>
        {dropdown && <Dropdown handleToggleDropdown={handleToggleDropdown}/>}
        
      </ToggleWrapper>


    )
  
}

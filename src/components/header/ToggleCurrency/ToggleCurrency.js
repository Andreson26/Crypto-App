import React from 'react'
import { CurrencyWrapper, ToggleWrapper } from './toggleCurrency.styles'
import chevronUp from '../../Icons/chevronUp.svg'
import chevronDown from '../../Icons/chevronDown.svg'
import Dropdown from './Dropdown'


export default function ToggleCurrency({handleToggleDropdown, dropdown}) {
    
    return (
      <ToggleWrapper>
        <CurrencyWrapper 
          onClick={handleToggleDropdown}
      >  
          <label>&#36;</label> 
          <h4>USD</h4>
          <div>
            {dropdown ? <img src={chevronUp} alt="" height={10}/> : <img src={chevronDown} alt="" height={10} />}
            
            
          </div>
        </CurrencyWrapper>
        {dropdown && <Dropdown handleToggleDropdown={handleToggleDropdown}/>}
        
      </ToggleWrapper>


    )
  
}

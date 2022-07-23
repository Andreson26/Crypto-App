import React from 'react'
import { DropdownWrapper } from './Dropdown.styles'

export default  function Dropdown({handleToggleDropdown}) {

    return (
      <DropdownWrapper onClick={handleToggleDropdown}>
        <ul>
            <li>
              <span>&#36;</span>
              <h4>USD</h4>
            </li>
            <li>
              <span>&#36;</span>
              <h4>USD</h4>
            </li>
            <li>
              <span>&#36;</span>
              <h4>USD</h4>
            </li>
            
            

        </ul>
      </DropdownWrapper>
    )
  
}

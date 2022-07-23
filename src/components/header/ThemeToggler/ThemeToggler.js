import React from 'react';
import { Form, StyleLabel} from './ThemeToggler.styles'

export default function ThemeToggler({handleToggleTheme}) {
    return (
      <Form>
        <StyleLabel>
          <input type="checkbox" onChange={handleToggleTheme} />
          <span />
        </StyleLabel>
        
    </Form>
    )
  
}

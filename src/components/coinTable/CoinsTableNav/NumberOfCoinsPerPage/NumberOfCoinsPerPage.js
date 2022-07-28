import React from 'react'
import { NumberOfCoinsPerPageWrapper, RowSelection, ArrowDown } from './NumberOfCoinsPage.styles'

export default function NumberOfCoinsPerPage() {
  return (
    <NumberOfCoinsPerPageWrapper>
        <p>Shows Rows:</p>
        <RowSelection>
          <span>20</span>
          <ArrowDown />
        </RowSelection>

    </NumberOfCoinsPerPageWrapper>
  )
}

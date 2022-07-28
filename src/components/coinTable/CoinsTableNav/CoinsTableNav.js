import React from 'react'
import { CoinsTableNavWrapper } from './CoinsTableNav.style'
import CoinsPagination from './CoinsPaginanation/CoinsPagination'
import CoinsTypes from './CoinsTypes/CoinsTypes'
import NumberOfCoinsPerPage from './NumberOfCoinsPerPage/NumberOfCoinsPerPage'
import FilteredTableCoins from './FilteredCoinsTable/FilteredCoinsTable'

export default function CoinsTableHeadr() {
  return (
    <CoinsTableNavWrapper>
        <FilteredTableCoins />
        <CoinsTypes />
        <NumberOfCoinsPerPage />
        <CoinsPagination />
    </CoinsTableNavWrapper>
  )
}

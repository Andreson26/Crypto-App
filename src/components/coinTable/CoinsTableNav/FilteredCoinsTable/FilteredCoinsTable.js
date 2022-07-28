import React from 'react'
import { FilterCoinsTableTitle, ArrowsWrapper, ArrowUp, ArrowDown, FilterCoinsTableTitleText } from './FilterCoinsTable.styles'

export default function FilteredTableCoins() {
  return (
    <FilterCoinsTableTitle>
      <ArrowsWrapper>
        <ArrowUp/>
        <ArrowDown/>
      </ArrowsWrapper>
        <FilterCoinsTableTitleText>
            <h1>Top Coins by <span>Market Cap</span></h1>
        </FilterCoinsTableTitleText>
        <ArrowDown />
    </FilterCoinsTableTitle>
  )
}

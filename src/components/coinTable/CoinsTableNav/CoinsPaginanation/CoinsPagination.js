import React from 'react'
import { CoinsPaginationWrapper, PageSelection, ArrowLeft, ArrowRight } from './CoinsPagination.styles'

export default function CoinsPagination() {
  return (
    <CoinsPaginationWrapper>
        <p>page:</p>
        <PageSelection>
            <ArrowLeft />
            <span>1</span>
            <ArrowRight />
        </PageSelection>
    </CoinsPaginationWrapper>
  )
}

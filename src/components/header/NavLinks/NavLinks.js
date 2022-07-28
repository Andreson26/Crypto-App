import React, { Component } from 'react'

import { LinksWrapper, LinkTag } from './NavLink.styles'

export default class NavLinks extends Component {
  render() {
    return (
      <ul>
        <LinksWrapper>
          <LinkTag to="/coins">Coins</LinkTag>
          <LinkTag to="/portfolio">Porfolio</LinkTag>
        </LinksWrapper>
      </ul>
    )
  }
}

import React from 'react'
import styled from 'styled-components/macro'

const Component = styled.div`
  display: flex;
  min-height: calc(100vh - 56px);
  /* inconsistencies across the design */
  /* background-color: #f6f6f6; */
  background-color: #fff;

  @media screen and (min-width: 750px) {
    min-height: calc(100vh - 64px);
  }

  @media screen and (min-width: 960px) {
    min-height: calc(100vh - 64px - 40px - 71px - 71px);
    padding: 71px 80px;
  }
`

const Container = ({ children }) => (
  <Component>
    {children}
  </Component>
)

export default Container

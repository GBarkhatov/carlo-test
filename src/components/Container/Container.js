import React from 'react'
import styled from 'styled-components/macro'

const Component = styled.div`
  display: flex;
  min-height: calc(100vh - 56px);
  background-color: #E5E5E5;

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

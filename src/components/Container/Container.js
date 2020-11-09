import React from 'react'
import styled from 'styled-components/macro'

const Component = styled.div`
  display: flex;
  min-height: calc(100vh - 40px - 64px);
  justify-content: center;
  align-items: center;
  background-color: #E5E5E5;
`

const Container = ({ children }) => (
  <Component>
    {children}
  </Component>
)

export default Container

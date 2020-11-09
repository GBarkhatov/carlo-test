import React from 'react'
import styled from 'styled-components/macro'
import AppBar from '../../components/AppBar/AppBar'
import Container from '../../components/Container/Container'

const Component = styled.div``

const LiveView = ({ path }) => (
  <Component>
    <AppBar path={path} />
    <Container>LiveView</Container>
  </Component>
)

export default LiveView

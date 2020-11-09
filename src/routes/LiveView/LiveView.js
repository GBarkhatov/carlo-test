import React from 'react'
import styled from 'styled-components/macro'
import AppBar from '../../components/AppBar/AppBar'

const Component = styled.div``

const LiveView = ({ path }) => (
  <Component>
    <AppBar path={path} />
    Inside LiveView
  </Component>
)

export default LiveView

import React from 'react'
import styled from 'styled-components/macro'
import AppBar from '../../components/AppBar/AppBar'

const Component = styled.div``

const Dashboard = ({ path }) => (
  <Component>
    <AppBar path={path} />
    <p>Dashboard content</p>
  </Component>
)

export default Dashboard

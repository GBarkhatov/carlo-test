import React from 'react'
import styled from 'styled-components/macro'
import AppBar from '../../components/AppBar/AppBar'
import Container from '../../components/Container/Container'
import AnalyticsPanel from '../../components/AnalyticsPanel/AnalyticsPanel'

const Component = styled.div``

const Dashboard = ({ path }) => (
  <Component>
    <AppBar path={path} />
    <Container>
      <AnalyticsPanel />
    </Container>
  </Component>
)

export default Dashboard

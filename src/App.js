import React from 'react'
import styled from 'styled-components/macro'
import { Router } from '@reach/router'

import Dashboard from './routes/Dashboard/Dashboard'
import Sites from './routes/Sites/Sites'
import Campaigns from './routes/Campaigns/Campaigns'
import Analytics from './routes/Analytics/Analytics'
import LiveView from './routes/LiveView/LiveView'
import Users from './routes/Users/Users'
import Organizations from './routes/Organizations/Organizations'
import Settings from './routes/Settings/Settings'
import AppBar from './components/AppBar/AppBar'

const Component = styled.div``

const App = () => (
  <Component>
    <AppBar />
    <Router>
      <Dashboard path='/' />
      <Sites path='sites' />
      <Campaigns path='campaigns' />
      <Analytics path='analytics' />
      <LiveView path='live-view' />
      <Users path='users' />
      <Organizations path='organizations' />
      <Settings path='settings' />
    </Router>
  </Component>
)

export default App

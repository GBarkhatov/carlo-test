import React from 'react'
import styled from 'styled-components/macro'

import AppBar from './components/AppBar/AppBar'
import Analytics from './components/Analytics/Analytics'
import FilterPanel from './components/FilterPanel/FilterPanel'

const Component = styled.div``

const App = () => (
  <Component>
    <AppBar />
    <Analytics />
    <FilterPanel />
    <FilterPanel />
    <FilterPanel />
  </Component>
)

export default App

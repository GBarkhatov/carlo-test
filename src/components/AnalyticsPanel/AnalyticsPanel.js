import React from 'react'
import styled from 'styled-components/macro'
import tabs from './tabs'

import Tab from './Tab'

const Component = styled.div`
  padding: 56px 20px 0;
  width: 100%;
`

const Header = styled.h2`
  margin: 0;
  margin-bottom: 18px;
  font-size: 36px;
  font-weight: 700;

  @media screen and (min-width: 960px) {
    margin-bottom: 83px;
  }
`

const AnalyticsPanel = () => (
  <Component>
    <Header>Analytics</Header>
    {tabs.map(({ title, Icon, text, change }) => (
      <Tab key={title} title={title} Icon={Icon} text={text} change={change}>
        <span>{title} content</span>
      </Tab>
    ))}
  </Component>
)

export default AnalyticsPanel

import React, { useState } from 'react'
import styled from 'styled-components/macro'

import Tab from './Tab'
import tabs from './tabs'
import FilterPanel from '../FilterPanel/FilterPanel'
import filters from './filters'
import Graph from './Graph'
import LeftPanel from './LeftPanel'

const Component = styled.div`
  padding: 56px 0;
  width: 100%;
`

const Header = styled.h2`
  margin: 0 0 18px 28px;
  font-size: 36px;
  font-weight: 700;

  @media screen and (min-width: 960px) {
    margin-bottom: 83px;
  }
`

const TabsWrapper = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 960px) {
    display: flex;
    width: 100%;
    overflow-x: scroll;
    margin-bottom: 0;
    border-radius: 20px 20px 0 0;
  }
`

const TabsDesktopContent = styled.div`
  display: none;
  margin-bottom: 40px;
  border-radius: 0 0 20px 20px;
  background-color: #fff;
  min-height: 600px;

  @media screen and (min-width: 960px) {
    display: flex;
  }
`

const RightPanel = styled.div`
  border-left: 1px solid #E5E5E5;
`

const AnalyticsPanel = () => {
  const [open, setOpen] = useState(tabs[0].title)

  const handleTabClick = (title) => () => {
    setOpen(title)
  }

  return (
    <Component>
      <Header>Analytics</Header>
      <TabsWrapper>
        {tabs.map(({ title, Icon, text, change, graph }) => (
          <Tab
            key={title}
            title={title}
            Icon={Icon}
            text={text}
            change={change}
            open={title === open}
            onClick={handleTabClick}
          >
            <Graph data={graph} />
          </Tab>
        ))}
      </TabsWrapper>
      <TabsDesktopContent>
        <LeftPanel />
        <RightPanel>RightPanel</RightPanel>
      </TabsDesktopContent>
      {filters.map(({ title, data }) => (
        <FilterPanel key={title} title={title} data={data} />
      ))}
    </Component>
  )
}

export default AnalyticsPanel

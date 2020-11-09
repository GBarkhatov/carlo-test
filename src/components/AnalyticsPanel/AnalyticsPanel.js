import React, { useState } from 'react'
import styled from 'styled-components/macro'

import Tab from './Tab'
import tabs from './tabs'
import FilterPanel from '../FilterPanel/FilterPanel'
import filters from './filters'
import Graph from './Graph'
import graphData from './graph-data'

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
        {tabs.map(({ title, Icon, text, change }) => (
          <Tab
            key={title}
            title={title}
            Icon={Icon}
            text={text}
            change={change}
            open={title === open}
            onClick={handleTabClick}
          >
            <Graph data={graphData} />
          </Tab>
        ))}
      </TabsWrapper>
      {filters.map(({ title, data }) => (
        <FilterPanel key={title} title={title} data={data} />
      ))}
    </Component>
  )
}

export default AnalyticsPanel

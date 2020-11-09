import React, { useState } from 'react'
import styled from 'styled-components/macro'

import Tab from './Tab'
import tabs from './tabs'
import FilterPanel from '../FilterPanel/FilterPanel'
import filters from './filters'

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

const AnalyticsPanel = () => {
  const [open, setOpen] = useState(tabs[0].title)

  const handleTabClick = (title) => () => {
    setOpen(title)
  }

  return (
    <Component>
      <Header>Analytics</Header>
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
          <span>{title} content</span>
        </Tab>
      ))}
      {filters.map(({ title, data }) => (
        <FilterPanel key={title} title={title} data={data} />
      ))}
    </Component>
  )
}

export default AnalyticsPanel

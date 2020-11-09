import React from 'react'
import styled from 'styled-components/macro'

import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'

const Component = styled.div`
  background: #f6f6f6;
  padding: 28px;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`

const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`

const Header = styled.h4`
  font-size: 24px;
  margin: 0;
`

const StyledIconButton = styled(IconButton)`
  width: 48px;
  height: 48px;
  color: #84868A;
`

const FilterPanel = ({ title, data }) => (
  <Component>
    <TopPart>
      <Header>{title}</Header>
      <StyledIconButton edge='start' color='inherit' aria-label='open drawer'>
        <MoreIcon />
      </StyledIconButton>
    </TopPart>
  </Component>
)

export default FilterPanel

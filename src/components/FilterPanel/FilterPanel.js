import React from 'react'
import styled from 'styled-components/macro'

import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

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
  color: #84868a;
`

const SitesWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Text = styled.p`
  margin: 0;
  font-size: 18px;
  color: #bdbdbd;
  font-weight: 500;
`

const StyledFormControl = styled(FormControl)`
  min-width: 50px;
  margin-left: 10px;
`

const FilterPanel = ({ title, data }) => (
  <Component>
    <TopPart>
      <Header>{title}</Header>
      <StyledIconButton edge='start' color='inherit' aria-label='open drawer'>
        <MoreIcon />
      </StyledIconButton>
    </TopPart>
    <SitesWrapper>
      <Text>Sites:</Text>
      <StyledFormControl>
        <Select>
          <MenuItem value='all'>All</MenuItem>
          <MenuItem value='today'>Today</MenuItem>
          <MenuItem value='recents'>Recents</MenuItem>
        </Select>
      </StyledFormControl>
    </SitesWrapper>
  </Component>
)

export default FilterPanel

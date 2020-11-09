import React from 'react'
import styled from 'styled-components/macro'

import IconButton from '@material-ui/core/IconButton'
import MoreIcon from '@material-ui/icons/MoreVert'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const Component = styled.div`
  background: #fff;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 960px) {
    min-width: 400px;
    background-color: #fff;
    border-radius: 20px;

    &:not(:last-of-type) {
      margin-bottom: 40px;
    }
  }
`

const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 16px 50px 28px;
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
  padding: 0 28px 50px 28px;
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

const Items = styled.div`
  padding: 0 28px 28px 28px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 10px;

  &:not(:last-of-type) {
    border-bottom: 1px solid #e5e5e5;
  }
`

const Icon = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  width: 46px;
  height: 46px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

const Short = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 13px;
`

const text = `
  margin: 0;
  font-weight: 500;
  font-size: 20px;
`

const Name = styled.p`
  ${text};

  flex: 1;
`

const Value = styled.p`
  ${text};
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
    <Items>
      {data.map(({ name, value, color, short }) => (
        <Item key={name}>
          <Icon color={color}>
            <Short>{short}</Short>
          </Icon>
          <Name>{name}</Name>
          <Value>{value}</Value>
        </Item>
      ))}
    </Items>
  </Component>
)

export default FilterPanel

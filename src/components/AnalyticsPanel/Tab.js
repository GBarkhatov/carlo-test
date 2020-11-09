import React from 'react'
import styled from 'styled-components/macro'

const Component = styled.div`
  @media screen and (min-width: 960px) {
    &:last-of-type > div {
      border-radius: 0 20px 0 0;
    }
  }
`

const TopPart = styled.div`
  background: #f6f6f6;
  border-bottom: 1px solid #fff;
  padding: 28px;

  &:hover {
    cursor: pointer;
    filter: brightness(102%);
  }

  @media screen and (min-width: 960px) {
    background: ${(props) => (props.open ? '#fff' : '#FCFAFA')};
  }
`

const Content = styled.div`
  background-color: #fff;
  height: 256px;

  @media screen and (min-width: 960px) {
    display: none;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h4`
  margin: 0 0 0 42px;
  color: #84868a;

  @media screen and (min-width: 960px) {
    white-space: nowrap;
    overflow: hidden;
  }
`

const IconWrapper = styled.div`
  margin-right: 20px;
  display: flex;
  width: 22px;
`

const Text = styled.p`
  margin: 0;
  font-size: 36px;
  font-weight: 500;
  margin-right: 10px;
`

const change = `
  border-radius: 10px;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  padding: 3px 6px;
`

const PositiveChange = styled.p`
  ${change};
  background-color: #beedc0;
  color: #01653b;
`

const NegativeChange = styled.p`
  ${change};
  background-color: #fed1d1;
  color: #f73859;
`

const Tab = ({ children, title, Icon, text, change, onClick, open }) => {
  const getChange = (change) => {
    if (change > 0) {
      return <PositiveChange>+{change}%</PositiveChange>
    } else if (change < 0) {
      return <NegativeChange>{change}%</NegativeChange>
    } else {
      return null
    }
  }

  return (
    <Component>
      <TopPart onClick={onClick(title)} open={open}>
        <Title>{title}</Title>
        <InnerWrapper>
          <IconWrapper>
            <Icon />
          </IconWrapper>
          <Text>{text}</Text>
          {getChange(change)}
        </InnerWrapper>
      </TopPart>
      {open && <Content>{children}</Content>}
    </Component>
  )
}

export default Tab

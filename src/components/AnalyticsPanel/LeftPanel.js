import React from 'react'
import styled from 'styled-components/macro'

const Component = styled.div`
  padding: 40px 50px 25px 50px;
  min-width: 300px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-of-type) {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e5e5e5;
  }
`

const Left = styled.div`
  display: flex;
  align-items: center;
`

const NameWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 50%;
  z-index: 2;
  border: 4px solid #fff;
`

const Name = styled.p`
  font-size: 14px;
  font-weight: 700;
`

const AdditionWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: #faf8f3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 50%;
  margin-left: -8px;
  z-index: 1;
`

const Addition = styled.p`
  margin: 0;
`

const Value = styled.p`
  margin: 0;
  font-size: 28px;
  font-weight: 500;
`

const LeftPanel = ({ data }) => (
  <Component>
    {data.map(({ name, addition, value, color }) => (
      <Item key={name}>
        <Left>
          <NameWrapper color={color}>
            <Name>{name}</Name>
          </NameWrapper>
          <AdditionWrapper>
            <Addition>{addition}</Addition>
          </AdditionWrapper>
        </Left>
        <Value>{value}</Value>
      </Item>
    ))}
  </Component>
)

export default LeftPanel

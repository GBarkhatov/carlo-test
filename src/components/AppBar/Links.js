import React from 'react'
import styled from 'styled-components/macro'
import { Link } from '@reach/router'

import routes from './routes'

const Component = styled.div`
  display: none;
  width: 100%;

  @media screen and (min-width: 960px) {
    display: flex;
  }
`

const Button = styled(Link)`
  padding: 10px 13px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => (props.match === 'yes' ? '#1A2437' : '#5D6677')};
  background-color: ${(props) =>
    props.match === 'yes' ? '#E5E5E5' : '#FFFFFF'};
  font-weight: ${(props) => (props.match === 'yes' ? 700 : 500)};
  font-size: 0.9rem;
  border-right: 1px solid #E5E5E5;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:visited,
  &:link,
  &:active {
    color: ${(props) => (props.match === 'yes' ? '#1A2437' : '#5D6677')};
  }
`

const IconWrapper = styled.span`
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  & > svg {
    width: 100%;
  }
`

const Links = ({ path }) => {
  return (
    <Component>
      {routes.map(({ title, to, Icon }) => (
        <Button
          key={title}
          to={to === '/' ? '/' : `/${to}`}
          match={path === to || path === `/${to}` ? 'yes' : 'no'}
        >
          <IconWrapper>
            <Icon />
          </IconWrapper>
          {title}
        </Button>
      ))}
    </Component>
  )
}

export default Links

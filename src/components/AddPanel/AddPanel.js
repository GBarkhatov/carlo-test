import React from 'react'
import styled from 'styled-components/macro'
import IconButton from '@material-ui/core/IconButton'
import AddRoundedIcon from '@material-ui/icons/AddRounded'

const Component = styled.div`
  display: none;

  @media screen and (min-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 350px;
    flex: 1;
    background-color: #fcfafa;
    border-radius: 20px;
    margin-bottom: 40px;
  }
`

const StyledIconButton = styled(IconButton)`
  width: 120px;
  height: 120px;
  color: #84868a;
  & > svg {
    width: 100%;
  }
`

const AddPanel = () => (
  <Component>
    <StyledIconButton color='inherit' aria-label='open drawer'>
      <AddRoundedIcon style={{ fontSize: 120, color: '#84868A' }} />
    </StyledIconButton>
  </Component>
)

export default AddPanel

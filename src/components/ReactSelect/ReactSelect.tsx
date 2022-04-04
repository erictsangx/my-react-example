import { styled } from '@mui/material'
import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const Wrapper = styled('div')`
  .rc__menu {
    color: ${(props) => props.theme.palette.primary.dark};
    background-color: ${(props) => props.theme.palette.background.paper};
  }
`

interface ReactSelectProps {
  placeholder?: string
}

export function ReactSelect(props: ReactSelectProps): JSX.Element {
  const { placeholder } = props
  return (
    <Wrapper>
      <Select
        isClearable
        menuIsOpen
        classNamePrefix="rc"
        options={options}
        placeholder={placeholder}
      />
    </Wrapper>
  )
}

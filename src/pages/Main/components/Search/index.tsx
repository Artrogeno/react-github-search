import React, { useState, useEffect, useRef } from 'react'

import { Container, Input } from './styles'

interface Props {
  setSearch: any
}

const Search: React.FC<Props> = ({ setSearch }) => {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handlerChange = ({ target: { value } }: any) => {
    setValue(value)
    setSearch(value)
  }

  useEffect(() => {
    const init = () => {
      const { current } = inputRef
      if (current) {
        current.focus()
      }
    }
    init()
  })

  return (
    <Container>
      <Input
        type="text"
        name="value"
        autoComplete="off"
        ref={inputRef}
        value={value}
        onChange={handlerChange}
      />
    </Container>
  )
}

export default Search

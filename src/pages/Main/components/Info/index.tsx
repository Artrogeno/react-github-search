import React from 'react'

import { Container } from './styles'

const Info = () => {
  return (
    <Container>
      You've activated the <em>file finder</em>. Start typing to filter the file
      list. Use <span className="navigation">↑</span> and{' '}
      <span className="navigation">↓</span> to navigate,{' '}
      <span className="navigation">esc</span> to exit.
    </Container>
  )
}

export default Info

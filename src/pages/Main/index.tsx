import React from 'react'

import List from './components/List'
import { Container, Columns, Col } from './styles'

const Main = () => {
  return (
    <Container>
      <Columns>
        <Col>
          <List />
        </Col>
        <Col>Nav Wrap</Col>
      </Columns>
    </Container>
  )
}

export default Main

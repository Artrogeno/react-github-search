import React from 'react'

import Item from '../Item'
import Header from '../Header'
import { ItemI } from '../../../../shared/models'
import { Container } from './styles'

const List = () => {
  const item: ItemI[] = [
    {
      type: 'file',
      name: 'index.ts',
      comment: 'changes for adding loader overlay',
      modified_time: new Date(),
    },
    {
      type: 'folder',
      name: 'public',
      comment: 'changes for adding loader overlay 2',
      modified_time: new Date(),
    },
  ]
  return (
    <Container>
      <Header />
      {item.map((item, index) => (
        <Item {...item} key={index} />
      ))}
    </Container>
  )
}

export default List

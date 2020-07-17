import React from 'react'

import Item from '../Item'
import Header from '../Header'
import { ItemI } from '../../../../shared/models'
import { Container } from './styles'

interface Props {
  data?: ItemI[]
  counter?: number
  isSearch?: boolean
}

const List: React.FC<Props> = ({ data, counter = 0, isSearch = false }) => {
  return (
    <Container>
      <Header />
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <Item
            {...item}
            counter={counter}
            index={index}
            key={index}
            searchView={isSearch}
          />
        ))
      ) : (
        <div>
          <h3 className="no-result">No matching files found</h3>
        </div>
      )}
    </Container>
  )
}

export default List

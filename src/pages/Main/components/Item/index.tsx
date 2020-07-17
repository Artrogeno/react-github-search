import React, { useState, useEffect } from 'react'
import moment from 'moment'

import { ItemI } from '../../../../shared/models'
import { AiFillFolder, AiOutlineFile, AiOutlineRight } from 'react-icons/ai'
import { Container, File, Name, Commit, Time, Icon } from './styles'

interface Props extends ItemI {
  index: number
  counter?: number
  searchView: boolean
}

const Item: React.FC<Props> = ({
  index,
  type,
  name,
  comment,
  modified_time,
  counter,
  searchView,
}) => {
  const [selected, setSelected] = useState<boolean>(false)

  useEffect(() => {
    if (searchView) {
      setSelected(index === counter)
    }
  }, [index, counter, searchView])
  return (
    <Container>
      <File className={`${selected ? 'active' : ''}`}>
        {searchView && (
          <Icon className={`${selected ? 'show' : 'hidden'}`}>
            <AiOutlineRight color="#0366d6" />
          </Icon>
        )}
        {type === 'folder' ? (
          <AiFillFolder color="#79b8ff" size="20" />
        ) : (
          <AiOutlineFile size="18" />
        )}
        <Name className="label" dangerouslySetInnerHTML={{ __html: name }} />
      </File>
      {!searchView && (
        <>
          <Commit>{comment}</Commit>
          <Time>{moment(modified_time).fromNow()}</Time>
        </>
      )}
    </Container>
  )
}

export default Item

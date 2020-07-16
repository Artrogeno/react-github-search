import React from 'react'
import moment from 'moment'

import { ItemI as Props } from '../../../../shared/models'
import { AiFillFolder, AiOutlineFile } from 'react-icons/ai'
import { Container, File, Name, Commit, Time } from './styles'

const Item: React.FC<Props> = ({ type, name, comment, modified_time }) => {
  return (
    <Container>
      <File>
        {type === 'folder' ? (
          <AiFillFolder color="#79b8ff" size="20" />
        ) : (
          <AiOutlineFile size="18" />
        )}
        <Name className="label">{name}</Name>
      </File>
      <Commit>{comment}</Commit>
      <Time>{moment(modified_time).fromNow()}</Time>
    </Container>
  )
}

export default Item

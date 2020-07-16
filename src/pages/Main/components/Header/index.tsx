import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { GoHistory } from 'react-icons/go'

import {
  Container,
  Icon,
  Details,
  CommitAuthor,
  Commit,
  Content,
  Hash,
  CommitDate,
  Commits,
  CountCommit,
  CommitText,
} from './styles'

const Header = () => {
  return (
    <Container>
      <Icon>
        <AiOutlineGithub color="#cbcbcb" size="26" />
      </Icon>
      <Details>
        <CommitAuthor>Arthur Costa da Silva</CommitAuthor>
        <Commit>feat: shortcut</Commit>
        <Content>
          <Hash href="#">4354d1d</Hash>
          <CommitDate href="#">on Dec 19, 2019</CommitDate>
        </Content>
      </Details>
      <Commits>
        <Icon>
          <GoHistory color="#000000" size="18" />
        </Icon>
        <CountCommit>198</CountCommit>
        <CommitText>commits</CommitText>
      </Commits>
    </Container>
  )
}

export default Header

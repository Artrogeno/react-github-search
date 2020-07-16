import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  margin-bottom: 1.6rem;
`

export const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 0.6rem;
  background-color: #f1f8ff;
  border: var(--border-grid) solid #c8e1ff;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
`

export const Icon = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  &:first-of-type {
    margin-left: 1rem;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 1rem;
`

export const CommitAuthor = styled.span`
  font-weight: 600;
  color: #24292e;
  white-space: nowrap;
`

export const Commit = styled.span`
  display: inline;
  white-space: nowrap;
`

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex: auto;
  margin-left: 1rem;
  align-items: baseline;
  justify-content: flex-end;
`

export const Hash = styled.a`
  font-size: 0.8rem;
  color: #586069;
  text-decoration: none;
`

export const CommitDate = styled.a`
  white-space: nowrap;
  color: #586069;
  text-decoration: none;
`

export const Commits = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const CountCommit = styled.span`
  font-weight: 600;
  padding-left: 0.2rem;
`

export const CommitText = styled.span`
  padding-left: 0.2rem;
`

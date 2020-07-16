import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  border-left: var(--border-grid) solid #e1e4e8;
  border-right: var(--border-grid) solid #e1e4e8;
  border-bottom: var(--border-grid) solid #e1e4e8;
  color: #586069;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem 0.8rem 1.6rem;
`

export const File = styled.div`
  color: #586069;
  margin-right: 0.6rem;
  flex-basis: 200px;
  flex-shrink: 0;
`

export const Name = styled.span``

export const Commit = styled.div`
  flex: 1 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Time = styled.div``

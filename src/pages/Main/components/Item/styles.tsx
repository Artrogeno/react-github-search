import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  border-left: var(--border-grid) solid #e1e4e8;
  border-right: var(--border-grid) solid #e1e4e8;
  border-bottom: var(--border-grid) solid #e1e4e8;
  color: #586069;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem 0.8rem 1.6rem;
  &:last-of-type {
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
  }

  &:hover {
    background-color: #f6f8fa;
  }
`

export const File = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 200px;
  flex-shrink: 0;
  color: #586069;
  margin-right: 0.6rem;
`

export const Name = styled.span`
  margin-left: 0.8rem;
`

export const Commit = styled.div`
  flex: 1 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Time = styled.div``

export const Icon = styled.span`
  position: absolute;
  left: 0.4rem;
  margin-top: 0.4rem;
  transition: opacity 0.3s ease-in-out;

  &.show {
    opacity: 1;
  }
  &.hidden {
    opacity: 0;
  }
`

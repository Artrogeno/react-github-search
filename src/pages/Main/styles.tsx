import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  height: calc(100vh - var(--header-h));
`

export const Columns = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  margin: 0 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
`

export const Col = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  &:nth-of-type(1) {
    width: 75%;
  }
  &:nth-of-type(2) {
    width: 25%;
  }
`

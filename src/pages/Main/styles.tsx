import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  height: calc(100vh - var(--header-h));
`

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 80vw;
  margin: 0 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
`

export const InfoBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 80vw;
  margin: 0.8rem 2rem;
  padding-left: 5rem;
  padding-right: 5.6rem;
`

export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
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

export const Title = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #0366d6;
  font-size: 1.4rem;
  font-weight: 400;
  margin-right: 1rem;

  svg {
    margin-right: 0.8rem;
  }
  strong {
    margin-left: 0.6rem;
    font-weight: 400;
    color: #000;
  }
`

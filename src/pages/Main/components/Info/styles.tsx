import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 0.6rem;
  background-color: #f1f8ff;
  border: var(--border-grid) solid #c8e1ff;
  border-radius: 0.4rem;
  width: 75%;

  .navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 1rem;
    width: 1rem;
    font-size: 0.8rem;
    font-weight: bold;
    border: 0.1rem solid #ccc;
    border-radius: 0.4rem;
    padding: 0.6rem 0.8rem;
    margin: 0 0.4rem;
    text-align: center;
    background-color: #fff;
  }
`

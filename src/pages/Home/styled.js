import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: inherit;
  justify-content: space-around;
`

export const InputDiv = styled.div`
  width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 2rem;
  margin: 15rem 0;
`

export const Label = styled.label`
  font-family: Anton;
`

export const Input = styled.input `
  border: 1px solid blueviolet;
  height: 1.5rem;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`

export const Button = styled.button`
  height: 2.5rem;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none
  }
`
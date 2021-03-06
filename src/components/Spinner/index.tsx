import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

export const Spinner = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-top-color: ${(props) => props.theme.colors.text};
  border-left-color: ${(props) => props.theme.colors.text};
  animation: ${spinner} 600ms linear infinite;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-style: solid;
  border-width: 3px;
  border-radius: 50%;  
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  margin: auto;
`

export default Spinner

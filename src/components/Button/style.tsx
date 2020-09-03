import styled from 'styled-components'

export const Container = styled.button`
  display: block;
  padding: 15px;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primary};
  background-color: transparent;
  border: 2pt solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
  min-width: 153px;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.7;
    color: #d1d1d1;
  }
`

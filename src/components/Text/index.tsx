import styled from 'styled-components'

const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.colors.text};
  margin: 0;
`
export default Text

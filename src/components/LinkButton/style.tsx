import styled from 'styled-components'
import {Link, LinkProps} from 'react-router-dom'

export const Container = styled(Link<LinkProps>)`
  display: block;
  padding: 15px;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.8;
    color: #d1d1d1;
  }
`

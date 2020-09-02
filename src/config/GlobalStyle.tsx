import { createGlobalStyle } from 'styled-components'
import { CustomTheme } from '../config/types'

interface Props {
  theme: CustomTheme
}

const GlobalStyles = createGlobalStyle<Props>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background-color: ${(props) => props.theme.colors.bodyBackground};
    display: flex;
    align-items: center;
    font-family: ${(props) => props.theme.fonts.primary};
    justify-content: center;
  }
`

export default GlobalStyles

import styled, {css, keyframes} from 'styled-components'
import { HintProps } from './types'

const hint = keyframes`
    0% { opacity: 0; }
    50% { opacity: .5; }
    100% { opacity: 1; }
`
const Hint = styled.p<HintProps>`
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 0.4rem;
    text-align: center;
    animation: ${hint} 600ms linear infinite;

    ${(props) => !props.blink &&
        css`
            animation: none;
        `
    }
`

export default Hint

import styled from 'styled-components'

const Title = styled.h1`
    color: ${(props) => props.theme.colors.text};
    min-height: 30px;
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: 1.25rem;
`

export default Title

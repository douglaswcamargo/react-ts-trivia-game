import styled from 'styled-components'

export const Question = styled.p`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-weight: bold;
    line-height: 1.4;
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.text};
    padding: 16px;
    border: 1pt solid ${(props) => props.theme.colors.text};
    height: 260px;
    width: 260px;
    margin: auto;
    word-break: break-word;
`

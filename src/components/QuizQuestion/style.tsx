import styled from 'styled-components'

export const Question = styled.p`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: ${(props) => props.theme.fonts.secondary};
    line-height: 1.4;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.text};
    padding: 8px;
    border: 1pt solid ${(props) => props.theme.colors.text};
    border-radius: 4px;
    height: 260px;
    width: 260px;
    margin: 20px auto auto;
    word-break: break-word;
`

export const Counter = styled.div`
    font-family: ${(props) => props.theme.fonts.secondary};
    padding: 30px;
    font-size: 1.1rem;
`

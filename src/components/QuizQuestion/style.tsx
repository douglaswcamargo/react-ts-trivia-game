import styled from 'styled-components'

export const Question = styled.p`
    display: flex;
    justify-content: center;
    flex-direction: column;
    line-height: 1.4;
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.text};
    padding: 16px;
    border: 1pt solid ${(props) => props.theme.colors.text};
    border-radius: 4px;
    height: 260px;
    width: 260px;
    margin: 20px auto auto;
    word-break: break-word;
`

export const Counter = styled.div`
    padding: 30px;
`

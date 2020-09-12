import styled from 'styled-components'

export const Wrapper = styled.div`
    font-family: ${(props) => props.theme.fonts.secondary};
    min-height: 370px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const List = styled.ul`
    overflow: auto;
    list-style: none;
    padding: 0.5rem;
    &::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 4px rgba(0,0,0,0.2);
        background-color: ${(props) => props.theme.colors.handheldScreen};
    }
    
    &::-webkit-scrollbar
    {
        width: 4px;
        background-color: ${(props) => props.theme.colors.handheldScreen};
    }
    
    &::-webkit-scrollbar-thumb
    {
        background-color: ${(props) => props.theme.colors.text};
        opacity: 0.8;
    }
`

export const ListItem = styled.li<{correct: boolean}>`
    display: flex;
    justify-content: space-between;
    font-size: 0.6rem;
    padding-left: 1em;
    padding-right: 1em;
    margin-bottom: 1rem;
    text-align: left;
    color: ${(props) => props.correct ? props.theme.colors.success : props.theme.colors.error};
    word-break: break-all;
`

export const Icon = styled.span`
    font-size: 1.2rem;
    margin-right: 0.5rem;
`

export const QuestionText = styled.span`
    padding-bottom: 1rem;
    border-bottom: 1pt dashed ${(props) => props.theme.colors.text};
`

export const Score = styled.h1`
    color: ${(props) => props.theme.colors.text};
`

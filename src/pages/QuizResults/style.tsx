import styled from 'styled-components'

export const TextWithPadding = styled.p`
    color: ${(props) => props.theme.colors.text};
    font-size: 1.4rem;
    padding-bottom: 38px;
`
export const Wrapper = styled.div`
    min-height: 446px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const List = styled.ul`
    max-height: 320px;
    overflow: auto;
    list-style: none;
    margin-left: 0;
    padding-left: 0;
    margin-bottom: 25px;
`
export const ListItem = styled.li<{correct: boolean}>`
    padding-left: 1em;
    text-indent: -0.8em;
    margin-bottom: 1rem;
    text-align: left;
    color: ${(props) => props.correct ? props.theme.colors.success : props.theme.colors.error};
`

import styled from 'styled-components'

export const Container = styled.div`
    width: 318px;
    padding-top: 0.8rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0;
    margin-left: 1px;
    margin-right: 1px;
    text-align: left;
    display: flex;
    background-color: #292425;
    & a {
        font-style: italic;
        font-size: 0.85rem;
        text-decoration: none;
        color: ${(props) => props.theme.colors.primary};
    }
`

export const Label = styled.div`
    margin: 0;
    font-size: 0.6rem;
    color: #908a99;
    font-family: 'Audiowide', cursive;
`

export const Stripes = styled.div`
    height: 0.7rem;
    border-top: 2pt solid ${(props) => props.theme.colors.handheldButton};
    border-bottom: 2pt solid ${(props) => props.theme.colors.handheldSecondary};
    flex-grow: 1;
    margin-left: 5px;
    margin-right: 2px;
    margin-top: 3px;
`

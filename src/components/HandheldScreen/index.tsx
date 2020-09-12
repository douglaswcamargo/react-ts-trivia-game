import styled from 'styled-components'

export const HandheldScreen = styled.div`
    height: 400px;
    width: 318px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: inset 3px 3px rgba(0,0,0,0.15);
    padding: 1rem;
    margin-bottom: 46px;
    margin-left: auto;
    margin-right: auto;
    background: ${(props) => props.theme.colors.handheldScreen};
`

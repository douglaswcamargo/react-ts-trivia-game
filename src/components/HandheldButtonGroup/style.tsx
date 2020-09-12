import styled from 'styled-components'

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const ButtonActionsWrapper = styled.div`
    transform: rotate(-11deg);
    height: 76px;
    width: 50%;
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.handheldBackgroundSecondary};
    padding: 12px;
    border-radius: 30px;
    box-shadow: inset 1px 1px rgba(0,0,0,0.06);
    margin-bottom: 1rem;
`

export const ButtonOptionsWrapper = styled.div`
    transform: rotate(-11deg);
    height: 76px;
    width: 40%;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-radius: 30px;
    margin-bottom: 1rem;
`

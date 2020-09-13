import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 100%;
    min-height: 560px;
    width: 360px;
    background-color: ${(props) => props.theme.colors.handheldBackground};
    box-shadow: 5px 5px ${(props) => props.theme.colors.handheldBackgroundSecondary};
    border-radius: 10px 10px 60px 10px;
    margin-bottom: 1rem;
`

export default Card

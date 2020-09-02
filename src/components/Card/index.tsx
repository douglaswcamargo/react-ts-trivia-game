import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 100%;
    min-height: 560px;
    width: 360px;
    background-color: ${(props) => props.theme.colors.sectionBackground};
    box-shadow: 0 1px 3px 0 rgba(153, 169, 190, 0.3);
    border-radius: 4px;
`

export default Card

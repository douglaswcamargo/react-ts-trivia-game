import styled from 'styled-components'

export const TextWithPadding = styled.p`
    color: ${(props) => props.theme.colors.text};
    font-size: 1.4rem;
    padding-bottom: 38px;
`
export const Wrapper = styled.div`
    height: 446px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

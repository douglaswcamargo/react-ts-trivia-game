import styled, { css } from 'styled-components'
import { GroupProps } from './types'

export const Container = styled.div<GroupProps>`
    display: flex;
    flex-direction: ${(props) => props.vertical === true ? 'column' : 'row'};
    justify-content: space-between;
    width: 100%;
    min-height: 48px;
    ${(props) => props.alignItems && css`
        align-items: ${(props: GroupProps) => props.alignItems};
    `}
`

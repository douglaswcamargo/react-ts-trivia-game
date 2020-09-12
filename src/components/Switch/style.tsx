import styled, { css } from 'styled-components'
import { SwitcherProps } from './types'

export const Container = styled.button.attrs({
  type: 'button'
})`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
`

export const Switcher = styled.div<SwitcherProps>`
  width: 40px;
  height: 21px;
  background-color: rgba(0,0,0,0.08);
  box-shadow: inset 2px 2px rgba(0,0,0,0.3);
  border-radius: 100px;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
  position: relative;
  flex-shrink: 0;

  &::after {
    content: " ";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.colors.handheldPrimary};
    box-shadow: 0px 1px 0px ${(props) => props.theme.colors.handheldSecondary};
    left: 0px;
    top: 0px;
    box-sizing: border-box;
    transition: all 0.2s ease;
    ${(props) => props.switched && css`
      border-color: transparent;
      left: ${40 - 20}px;
    `}
  }
}`

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
  background-color: ${(props) => props.theme.colors.control};
  border-radius: 100px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  position: relative;
  flex-shrink: 0;

  &::after {
    content: " ";
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: #fff;
    border: 1px solid ${(props) => props.theme.colors.control};
    left: 2px;
    top: 2px;
    box-sizing: border-box;
    transition: all 0.2s ease;
    ${(props) => props.switched && css`
      border-color: transparent;
      left: ${40 - 18 - 2}px;
    `}
  }
}`

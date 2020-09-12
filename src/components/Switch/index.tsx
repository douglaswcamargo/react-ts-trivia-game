import React from 'react'
import { SwitchProps } from './types'
import * as S from './style'

const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  const {
    value,
    onChange,
    labelLeft,
    labelRight,
    disabled
  } = props

  return (
    <div>
      <S.Container
        disabled={disabled}
        onClick={() => {
          if (!disabled) {
            onChange(!value)
          }
        }}
      >
        {labelLeft && <span>{labelLeft} </span>}
        <S.Switcher
          switched={value}
          disabled={disabled}
        />
        {labelRight && <span> {labelRight}</span>}
      </S.Container>
    </div>
  )
}

export default Switch

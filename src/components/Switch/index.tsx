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
        {labelLeft && <S.Label>{labelLeft}</S.Label>}
        <S.Switcher
          switched={value}
          disabled={disabled}
        />
        {labelRight && <S.Label>{labelRight}</S.Label>}
      </S.Container>
    </div>
  )
}

export default Switch

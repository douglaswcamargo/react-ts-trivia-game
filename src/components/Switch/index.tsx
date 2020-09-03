import React from 'react'
import Text from '../Text'
import { SwitchProps } from './types'
import * as S from './style'

const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  const {
    value,
    onChange,
    labelLeft,
    labelRight,
    labelLeftProps,
    labelRightProps,
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
        {labelLeft && <Text as='span' {...labelLeftProps}>{labelLeft} </Text>}
        <S.Switcher
          switched={value}
          disabled={disabled}
        />
        {labelRight && <Text as='span' {...labelRightProps}> {labelRight}</Text>}
      </S.Container>
    </div>
  )
}

export default Switch

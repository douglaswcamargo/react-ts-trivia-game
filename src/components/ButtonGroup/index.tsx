import React from 'react'
import { ButtonGroupProps } from './types'
import * as S from './style'

export default function ButtonGroup (props: ButtonGroupProps) {
  const { children } = props
  return (
    <S.Container>
      {children}
    </S.Container>
  )
}

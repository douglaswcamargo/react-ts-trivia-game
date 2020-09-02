import React from 'react'
import { ButtonProps } from './types'
import * as S from './style'

export default function Button (props: ButtonProps) {
  const {
    title,
    disabled,
    onClick
  } = props

  return (
    <S.Container
      title={title}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </S.Container>
  )
}

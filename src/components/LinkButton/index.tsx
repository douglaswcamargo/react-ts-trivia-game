import React from 'react'
import * as S from './style'
import { LinkProps } from 'react-router-dom'

export default function LinkButton (props: LinkProps) {
  return (
    <S.Container {...props} />
  )
}

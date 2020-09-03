import React from 'react'
import * as S from './style'
import { LinkProps } from 'react-router-dom'

const LinkButton: React.FC<LinkProps> = (props: LinkProps) => {
  return (
    <S.Container {...props} />
  )
}

export default LinkButton

import React from 'react'
import * as S from './style'
import { GroupProps } from './types'

const Group: React.FC<GroupProps> = (props: GroupProps) => {
  const { children, alignItems, vertical } = props
  return (
    <S.Container
      alignItems={alignItems}
      vertical={vertical}
    >
      {children}
    </S.Container>
  )
}

export default Group

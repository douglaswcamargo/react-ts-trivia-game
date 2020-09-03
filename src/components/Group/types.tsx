import { ReactChild, ReactChildren } from 'react'

export interface GroupProps {
  vertical?: boolean
  alignItems?: string
  children: ReactChild | ReactChild[] | ReactChildren
}

import { ReactChild, ReactChildren, SyntheticEvent } from 'react'

export interface QuizContainerProps {
  children: ReactChild | ReactChild[] | ReactChildren
  onClickA?: (e: SyntheticEvent) => void
  onClickB?: (e: SyntheticEvent) => void
}

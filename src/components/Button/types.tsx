import { SyntheticEvent } from 'react'

export interface ButtonProps {
  title: string
  disabled?: boolean
  onClick?: (e: SyntheticEvent) => void
}

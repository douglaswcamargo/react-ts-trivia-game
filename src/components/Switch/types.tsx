import React from 'react'

export interface SwitcherProps {
  disabled: boolean
  switched: boolean
}

export interface SwitchProps {
  value: boolean
  onChange: (value: boolean) => void
  labelLeft?: string | React.ReactNode
  labelRight?: string | React.ReactNode
  disabled: boolean
  switched?: boolean
}

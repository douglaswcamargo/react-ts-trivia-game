export interface SwitcherProps {
  disabled: boolean
  switched: boolean
}

export interface SwitchProps {
  value: boolean
  onChange: (value: boolean) => void
  labelLeft?: string
  labelRight?: string
  labelLeftProps?: object
  labelRightProps?: object
  disabled: boolean
  switched: boolean
}

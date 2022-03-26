import { SyntheticEvent } from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: (e: SyntheticEvent) => void
  classes?: string
}

export default ButtonProps

import { SyntheticEvent } from 'react'

interface InputProps {
  value: string | number
  onChange: (e: SyntheticEvent) => void
  className: string
}

export default InputProps

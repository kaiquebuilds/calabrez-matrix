import { ChangeEvent } from 'react'

interface InputProps {
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  className: string
}

export default InputProps

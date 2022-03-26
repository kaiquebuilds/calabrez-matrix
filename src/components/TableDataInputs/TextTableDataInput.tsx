import InputProps from './InputProps'

const TextTableDataInput = ({ value, onChange, className }: InputProps) => {
  return (
    <td className={className}>
      <input type="text" value={value} onChange={onChange} />
    </td>
  )
}

export default TextTableDataInput

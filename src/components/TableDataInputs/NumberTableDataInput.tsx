import InputProps from './InputProps'

const NumberTableDataInput = ({ value, onChange, className }: InputProps) => {
  return (
    <td className={className}>
      <input type="number" min="0" max="10" value={value} onChange={onChange} />
    </td>
  )
}

export default NumberTableDataInput

import ButtonProps from './ButtonProps'

const Button = ({ classes, children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`btn ${classes}`}>
      {children}
    </button>
  )
}

export default Button

import Button from './Button'
import ButtonProps from './ButtonProps'

const SecondaryButton = (props: ButtonProps) => {
  return (
    <Button {...props} classes={'secondary'}>
      {props.children}
    </Button>
  )
}

export default SecondaryButton

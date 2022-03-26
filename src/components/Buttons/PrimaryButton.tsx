import Button from './Button'
import ButtonProps from './ButtonProps'

const PrimaryButton = (props: ButtonProps) => {
  return (
    <Button {...props} classes={'primary'}>
      {props.children}
    </Button>
  )
}

export default PrimaryButton

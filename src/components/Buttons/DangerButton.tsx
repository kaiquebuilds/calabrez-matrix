import Button from './Button'
import ButtonProps from './ButtonProps'

const DangerButton = (props: ButtonProps) => {
  return (
    <Button {...props} classes={'danger'}>
      {props.children}
    </Button>
  )
}

export default DangerButton

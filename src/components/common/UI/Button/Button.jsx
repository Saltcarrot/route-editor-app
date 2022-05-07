import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import ButtonWrapper from './Button.style'

const Button = ({ onClick }) => {
  return (
    <ButtonWrapper type='button' onClick={onClick}>
      <FontAwesomeIcon icon={faTrash} />
    </ButtonWrapper>
  )
}

export default Button

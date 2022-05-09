import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import ButtonWrapper from './Button.style'

const Button = ({ onClick }) => {
  return (
    <ButtonWrapper
      data-testid='delete-point-btn'
      type='button'
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faTrash} />
    </ButtonWrapper>
  )
}

export default Button

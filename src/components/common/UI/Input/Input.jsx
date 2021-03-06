import InputWrapper from './Input.style'

const Input = ({ value, setValue, onKeyDown }) => {
  return (
    <InputWrapper
      data-testid='title-input'
      type='text'
      placeholder='Название точки маршрута'
      value={value}
      onChange={({ target: { value } }) => setValue(value)}
      onKeyDown={(event) => onKeyDown(event)}
    />
  )
}

export default Input

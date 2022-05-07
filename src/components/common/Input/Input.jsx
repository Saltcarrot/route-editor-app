import InputWrapper from './Input.style'

const Input = ({ value, setValue, onKeyDown }) => {
  return (
    <InputWrapper
      type='text'
      placeholder='Введите название точки и нажмите Enter'
      value={value}
      onChange={({ target: { value } }) => setValue(value)}
      onKeyDown={(event) => onKeyDown(event)}
    />
  )
}

export default Input
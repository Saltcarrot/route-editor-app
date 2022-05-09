import ContentWrapper from './Wrapper.style'

const Wrapper = ({ children }) => {
  return <ContentWrapper data-testid='wrapper'>{children}</ContentWrapper>
}

export default Wrapper

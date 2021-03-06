import styled from 'styled-components'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  height: 100%;
  width: 100%;

  padding: 10px;
  margin: 0 auto;

  border-radius: 10px;

  background-color: #fff;

  > * {
    width: 50%;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (max-width: 767px) {
    > * {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;

    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1120px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`

export default ContentWrapper

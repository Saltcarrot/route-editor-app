import styled from 'styled-components'

const YandexMapWrapper = styled.div`
  min-height: 500px;
  height: calc(100vh - 80px);
  max-height: 1000px;

  width: 100%;

  > div > ymaps {
    border-radius: 10px;

    overflow: hidden;
  }
`

export default YandexMapWrapper

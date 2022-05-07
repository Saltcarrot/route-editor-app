import styled from 'styled-components'

const SidebarWrapper = styled.aside`
  width: 100%;
  max-width: 355px;

  margin-right: 10px;

  border-radius: 10px 0 0 10px;

  > *:not(:last-child) {
    margin-bottom: 10px;
  }

  @media (max-width: 767px) {
    max-width: 100%;

    margin-right: 0;
    margin-bottom: 10px;

    border-radius: 10px 10px 0 0;
  }
`

export default SidebarWrapper

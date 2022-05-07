import styled from 'styled-components'

const SidebarWrapper = styled.aside`
  padding: 10px;

  border-radius: 10px 0 0 10px;

  background-color: #fff;

  > *:not(:last-child) {
    margin-bottom: 10px;
  }
`

export default SidebarWrapper

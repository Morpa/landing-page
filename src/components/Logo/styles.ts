import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 22rem;

  ${media.greaterThan('medium')`
    width: 24.5rem;
  `}
`

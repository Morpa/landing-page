import * as S from './styles'

export type HeadingProps = {
  reverseColor?: boolean
  lineBottom?: boolean
  children: string
}

const Heading = ({ reverseColor, lineBottom, children }: HeadingProps) => (
  <S.Wrapper reverseColor={reverseColor} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
)

export default Heading

import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  wide?: boolean
  href?: string
  withPrice?: boolean
  onClick?: () => void
}

const Button = ({ href, children, onClick, wide, withPrice }: ButtonProps) => (
  <S.ButtonWrapper
    href={href}
    wide={wide}
    withPrice={withPrice}
    onClick={onClick}
  >
    {children}
  </S.ButtonWrapper>
)

export default Button

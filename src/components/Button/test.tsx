import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render Button as a link', () => {
    renderWithTheme(<Button href="/link">Comprar</Button>)

    expect(screen.getByRole('link', { name: /Comprar/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render Button wide', () => {
    renderWithTheme(
      <Button href="/link" wide>
        Comprar
      </Button>
    )

    expect(screen.getByRole('link', { name: /Comprar/i })).toHaveStyle({
      padding: '1.3rem 3.2rem'
    })
  })

  it('should render Button with price', () => {
    renderWithTheme(
      <Button href="/link" withPrice>
        Comprar
        <div>R$549</div>
      </Button>
    )

    expect(screen.getByRole('link', { name: /Comprar/i })).toHaveStyle({
      padding: '1.6rem '
    })
  })
})

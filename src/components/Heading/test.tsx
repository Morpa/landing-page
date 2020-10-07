import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a black heading by default', () => {
    renderWithTheme(<Heading>React Avançado</Heading>)
    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toHaveStyle({
      color: '#000000'
    })
  })

  it('should render a heading when reverse color is passed', () => {
    renderWithTheme(<Heading reverseColor>React Avançado</Heading>)

    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toHaveStyle({
      color: '#FFFFFF'
    })
  })

  it('should render a heading with a primary line color', () => {
    renderWithTheme(<Heading lineBottom>React Avançado</Heading>)

    const heading = screen.getByRole('heading', { name: /React Avançado/i })

    expect(heading).toHaveStyleRule('border-bottom', '0.31rem solid #F231A5', {
      modifier: '::after'
    })
  })
})

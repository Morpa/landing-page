import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the names of authors', () => {
    const { container } = renderWithTheme(<Footer />)

    expect(screen.getByText('Willian Justen').closest('a')).toHaveAttribute(
      'href',
      'https://willianjusten.com.br/'
    )

    expect(screen.getByText('Guilherme Louro').closest('a')).toHaveAttribute(
      'href',
      'https://guilouro.dev'
    )

    expect(screen.getByText('Marcos Oliveira').closest('a')).toHaveAttribute(
      'href',
      'https://dribbble.com/vmarcosp'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a normal logo', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/React Avançado/i).parentElement).toHaveStyle({
      width: '22rem'
    })
  })
})

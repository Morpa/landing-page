import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardModule from '.'

const props = {
  title: 'React',
  subTitle: 'ReactRockstar'
}

describe('<CardModule />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <CardModule {...props}>lorem ipsun</CardModule>
    )

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.subTitle })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

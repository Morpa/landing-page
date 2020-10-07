import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <div style={{ maxWidth: '40rem', margin: '0 auto', marginTop: '1rem' }}>
    <Button {...args} />
  </div>
)
Default.args = {
  children: 'Comprar',
  href: 'link',
  wide: true
}

export const withPrice: Story<ButtonProps> = (args) => (
  <div style={{ maxWidth: '40rem', margin: '0 auto', marginTop: '1rem' }}>
    <Button {...args}>
      <p>Comprar o curso</p>
      <div>
        <div>R$549</div>
      </div>
    </Button>
  </div>
)
withPrice.args = {
  children: 'Comprar',
  href: 'link',
  wide: false,
  withPrice: true
}

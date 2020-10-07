import { Story, Meta } from '@storybook/react/types-6-0'
import CardModule, { CardModuleProps } from '.'

export default {
  title: 'CardModule',
  component: CardModule,
  args: {
    title: 'title default',
    subTitle: 'description default'
  }
} as Meta

export const Default: Story<CardModuleProps> = (args) => (
  <CardModule {...args}>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi culpa, odit
      rerum optio impedit quae aspernatur excepturi consequuntur assumenda
      temporibus quos iure similique ullam officia delectus fuga corporis illo
      omnis.
    </div>
  </CardModule>
)

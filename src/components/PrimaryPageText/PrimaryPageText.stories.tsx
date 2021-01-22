import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import PrimaryPageText, { PrimaryPageTextProps } from './PrimaryPageText'

export default {
  title: 'Components/Text/PrimaryPageText',
  component: PrimaryPageText,
  argTypes: {
    className: { control: 'text' },
    text: { control: 'text' },
  },
} as Meta;

const Template: Story<PrimaryPageTextProps> = (args) => (
  <PrimaryPageText {...args} />
)

export const BasicUsage = Template.bind({})
BasicUsage.args = {
  className: 'pb-6',
  text: 'We are Answer Digital.'
}

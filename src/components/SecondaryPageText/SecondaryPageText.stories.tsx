import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import SecondaryPageText, { SecondaryPageTextProps } from './SecondaryPageText'

export default {
  title: 'Components/Text/SecondaryPageText',
  component: SecondaryPageText,
  argTypes: {
    className: { control: 'text' },
    text: { control: 'text' },
  },
} as Meta;

const Template: Story<SecondaryPageTextProps> = (args) => (
  <SecondaryPageText {...args} />
)

export const BasicUsage = Template.bind({})
BasicUsage.args = {
  className: 'pb-6',
  text: 'This is a really long text that could be used as the sub-heading of the page.'
}

export const CustomFontSize = Template.bind({})
CustomFontSize.args = {
  className: 'pb-6 text-4xl md:text-6xl',
  text: 'This is a really long text that could be used as the sub-heading of the page.'
}

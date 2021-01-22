import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Wrapper, { WrapperProps } from './Wrapper'

export default {
  title: 'Components/Layout/Wrapper',
  component: Wrapper,
  argTypes: {
    className: { control: 'text' },
  },
} as Meta

const Template: Story<WrapperProps> = (args) => (
  <div className="bg-yellow-100">
    <Wrapper {...args}>
      <h2 className="text-2xl md:text-3xl font-extralight">
        This is content is inside a Wrapper.
      </h2>
    </Wrapper>
    <p className="py-10">This one is not.</p>
  </div>
)

export const BasicUsage = Template.bind({})
BasicUsage.args = {
  className: 'p-6 bg-gray-200',
}

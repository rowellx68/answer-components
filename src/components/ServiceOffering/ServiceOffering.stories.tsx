import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import ServiceOffering, { ServiceOfferingProps } from './ServiceOffering'

export default {
  title: 'Components/ServiceOffering',
  component: ServiceOffering,
  argTypes: {
    className: { control: 'text' },
    title: { control: 'text' },
    text: { control: 'text' },
  },
} as Meta

const Template: Story<ServiceOfferingProps> = (args) => (
  <ServiceOffering {...args} />
)

const GridTemplate: Story<ServiceOfferingProps> = (args) => (
  <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
    <ServiceOffering {...args} />
    <ServiceOffering {...args} />
    <ServiceOffering {...args} />
    <ServiceOffering {...args} />
  </div>
)

export const BasicUsage = Template.bind({})
BasicUsage.args = {
  className: 'pb-6',
  title: 'Service',
  text:
    'This is a really long text that could be used as the sub-heading of the page.',
}

export const GridUsage = GridTemplate.bind({})
GridUsage.args = {
  className: 'pb-6',
  title: 'Services',
  text:
    'This is a really long text that could be used as the sub-heading of the page.',
}

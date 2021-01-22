import React from 'react'
import renderer from 'react-test-renderer'

import ServiceOffering from './ServiceOffering'

test('render ServiceOffering correctly', () => {
  const element = renderer
    .create(<ServiceOffering title="Title" text="Text goes here" />)
    .toJSON()

  expect(element).toMatchSnapshot()
})

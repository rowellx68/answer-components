import React from 'react'
import renderer from 'react-test-renderer'
import PrimaryPageText from './PrimaryPageText'

test('Renders PrimaryPageText correctly', () => {
  const element = renderer
    .create(<PrimaryPageText text="We are Answer Digital." />)
    .toJSON()

  expect(element).toMatchSnapshot()
})

test('Renders PrimaryPageText correctly when passing className', () => {
  const element = renderer
    .create(<PrimaryPageText className="pb-6" text="We are Answer Digital." />)
    .toJSON()

  expect(element).toMatchSnapshot()
})

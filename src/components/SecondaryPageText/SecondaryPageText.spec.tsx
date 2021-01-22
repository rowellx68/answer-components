import React from 'react'
import renderer from 'react-test-renderer'
import SecondaryPageText from './SecondaryPageText'

test('renders SecondaryPageText correctly', () => {
  const text = 'This is a really long text that could be used as the sub-heading of the page'
  const element = renderer
    .create(<SecondaryPageText text={text} />)
    .toJSON()

  expect(element).toMatchSnapshot()
})

test('renders SecondaryPageText correctly when passing className', () => {
  const text = 'This is a really long text that could be used as the sub-heading of the page'
  const element = renderer
    .create(<SecondaryPageText className="pb-6" text={text} />)
    .toJSON()

  expect(element).toMatchSnapshot()
})

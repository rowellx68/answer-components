import React from 'react'
import renderer from 'react-test-renderer'

import Wrapper from './Wrapper'

test('renders Wrapper correctly', () => {
  const element = renderer
    .create(<Wrapper>Content goes here.</Wrapper>)
    .toJSON()

  expect(element).toMatchSnapshot()
})

test('renders Wrapper correctly when passing className', () => {
  const element = renderer
    .create(<Wrapper className="bg-gray-200">Content goes here.</Wrapper>)
    .toJSON()

  expect(element).toMatchSnapshot()
})

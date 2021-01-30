import React from 'react'
import { shallow } from 'enzyme'

import { Editor } from './Editor'

describe('<Editor />', () => {
  it('should render', () => {
    const wrapper = shallow(<Editor />)

    expect(wrapper).toBeDefined()
  })
})

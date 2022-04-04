import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { MemoExample } from './MemoExample'

export default {
  title: 'Example/Memo',
  component: MemoExample,
  argTypes: {},
} as ComponentMeta<typeof MemoExample>

const Template: ComponentStory<typeof MemoExample> = (args: any) => (
  <MemoExample {...args} />
)

export const Demo = Template.bind({})
Demo.args = {}

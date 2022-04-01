import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'

import {ReactSelect} from './ReactSelect'

export default {
    title: 'ReactSelect',
    component: ReactSelect,
} as ComponentMeta<typeof ReactSelect>

const Template: ComponentStory<typeof ReactSelect> = (args) => <ReactSelect {...args} />

export const Demo = Template.bind({})
Demo.args = {}

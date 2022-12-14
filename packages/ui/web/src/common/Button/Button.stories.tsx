import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ref: { table: { disable: true } },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  children: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  children: <>Disabled...</>,
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'Large',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Small',
}

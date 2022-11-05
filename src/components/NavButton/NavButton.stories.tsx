import { Meta, StoryObj } from '@storybook/react'
import { NavButton, NavButtonProps } from './NavButton'

export default {
  title: 'Component/NavButton',
  component: NavButton,
  args: {},
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<NavButtonProps>


export const Default: StoryObj<NavButtonProps> = {}

export const Small: StoryObj<NavButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj<NavButtonProps> = {
  args: {
    size: 'lg',
  },
}

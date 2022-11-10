import { Meta, StoryObj } from '@storybook/react'
import { Loading, LoadingProps } from './'

export default {
  title: 'Component/Loading',
  component: Loading,
  args: {
    text: 'Aguarde...'
  },
  argTypes: {},
} as Meta<LoadingProps>

export const Default: StoryObj<LoadingProps> = {}

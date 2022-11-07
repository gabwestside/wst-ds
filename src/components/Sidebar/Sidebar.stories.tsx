import { Meta, StoryObj } from '@storybook/react'
import { Sidebar, SidebarProps } from '.'

export default {
  title: 'Component/Sidebar',
  component: Sidebar,
  args: {},
  argTypes: {},
} as Meta<SidebarProps>

export const Default: StoryObj<SidebarProps> = {
  args: { 
    buttonsList: [
      {children: 'CreditCard', icon: 'creditCard'},
      {children: 'Money Transfer', icon: 'money'},
      {children: 'Boletos', icon: 'tray'},
      {children: 'Pix', icon: 'creditCard'},
      {children: 'Payment', icon: 'money'},
      {children: 'Mails', icon: 'tray'},
    ]
  }
}

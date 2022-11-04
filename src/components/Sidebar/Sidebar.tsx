import { useState } from 'react'
import { clsx } from 'clsx'
import {
  Atom,
  ArrowSquareLeft,
  ArrowSquareRight,
  User,
  IdentificationBadge,
  SignOut,
  ArrowsLeftRight,
} from 'phosphor-react'

import { Text } from '../Text/Text'
import { Heading } from '../Heading/Heading'
import { Button } from '../Button/Button'

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const ArrowIcon = isOpen ? ArrowSquareLeft : ArrowSquareRight
  const UserDetail = isOpen ? User : IdentificationBadge
  const UserDetailIconSize = isOpen ? 24 : 32

  return (
    <div
      className={clsx('h-full bg-gray-800 transition duration-700', {
        'w-[320px]': isOpen,
        'w-16': !isOpen,
      })}
    >
      <div
        className={clsx(' flex justify-center items-center gap-1', {
          'w-36': isOpen,
          'w-14': !isOpen,
        })}
      >
        <Atom
          className={clsx('text-cyan-500 my-5', {
            'h-10 w-10': isOpen,
            'h-8 w-8 self ml-2': !isOpen,
          })}
        />
        {isOpen && <Heading size='sm'>wstside</Heading>}
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'flex items-center m-3 gap-3 font-medium cursor-pointer my-3',
          {
            'justify-end': isOpen,
            'justify-center': !isOpen,
          }
        )}
      >
        <ArrowIcon size={isOpen ? 24 : 20} className='text-gray-400' />
        {isOpen && <Text size='sm'>Reduce</Text>}
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'flex flex-col justify-center items-center text-gray-400',
          {
            'h-[360px]': isOpen,
            'h-[80px]': !isOpen,
          }
        )}
      >
        <UserDetail
          size={UserDetailIconSize}
          className='text-gray-400 cursor-pointer my-4'
        />
        {isOpen && 'User Details'}
      </div>

      <div
        className={clsx(
          // 'grid overflow-y-auto grid-cols-3 grid-rows-2 gap-x-4 gap-y-2 w-32 my-12':
          //   isOpen,
          'flex flex-col justify-center items-center' //: !isOpen,
        )}
      >
        <div className={clsx({ 'w-32': isOpen, 'w-auto': !isOpen }, ' my-4')}>
          <Button asChild>
            <div className={clsx('flex items-center justify-center gap-2')}>
              <ArrowsLeftRight size={isOpen ? 24 : 20} />
              {isOpen && 'Transfer'}
            </div>
          </Button>
        </div>
      </div>

      <div
        className={clsx(
          'flex items-center m-3 gap-3 text-gray-400 font-medium cursor-pointer my-3',
          {
            'justify-end': isOpen,
            'justify-center': !isOpen,
          }
        )}
      >
        <SignOut size={isOpen ? 24 : 20} />
        {isOpen && <Text size='sm'>Sair</Text>}
      </div>
    </div>
  )
}

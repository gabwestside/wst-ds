import { useState } from 'react'
import { clsx } from 'clsx'
import {
  Atom,
  User,
  SignOut,
  ArrowSquareLeft,
  ArrowSquareRight,
  IdentificationBadge,
} from 'phosphor-react'

import { Text } from '../Text'
import { Heading } from '../Heading'

import { NavButton, NavButtonProps } from '../NavButton'

export interface SidebarProps {
  buttonsList: NavButtonProps[]
}

export const Sidebar = ({ buttonsList }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const ArrowIcon = isOpen ? ArrowSquareLeft : ArrowSquareRight
  const UserDetail = isOpen ? User : IdentificationBadge
  const UserDetailIconSize = isOpen ? 24 : 32

  return (
    <div
      className={clsx('h-full bg-gray-800 transition-all duration-700', {
        'w-[320px]': isOpen,
        'w-16': !isOpen,
      })}
    >
      <div
        className={clsx('flex justify-center items-center gap-1 transition-all duration-700', {
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
          'flex items-center m-3 gap-3 font-medium cursor-pointer my-3 transition-all duration-700',
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
          'flex flex-col justify-center items-center text-gray-400 transition-all duration-700',
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
        className={clsx({
          'grid grid-cols-3 grid-rows-2 gap-y-6 w-full my-12 justify-items-center transition-all duration-700':
            isOpen,
          'flex flex-col justify-center items-center gap-2': !isOpen,
        })}
      >
        {buttonsList.map(({ icon, size, children }: NavButtonProps) =>
          isOpen ? (
            <NavButton icon={icon} size={size}>
              {children}
            </NavButton>
          ) : (
            <NavButton icon={icon} size={'sm'} />
          )
        )}
      </div>

      <div
        className={clsx(
          'flex items-center m-3 gap-3 text-gray-400 font-medium cursor-pointer my-3 transition-all duration-700',
          {
            'justify-end': isOpen,
            'justify-center': !isOpen,
          }
        )}
      >
        <SignOut size={isOpen ? 24 : 20} />
        {isOpen && <Text size='sm'>SignOut</Text>}
      </div>
    </div>
  )
}

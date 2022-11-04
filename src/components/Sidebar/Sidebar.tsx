import { useState } from 'react'
import { clsx } from 'clsx'
import { Atom, ArrowSquareLeft, ArrowSquareRight, User } from 'phosphor-react'

import { Text } from '../Text/Text'
import { Heading } from '../Heading/Heading'

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const ArrowIcon = isOpen ? ArrowSquareLeft : ArrowSquareRight
  const mainLogoTransition = isOpen ? 'default' : 'smallPrimary'
  const navButtonSize = isOpen ? 'medium' : 'small'

  return (
    <div
      className={clsx('h-full bg-gray-800 transition duration-150 ease-out', {
        'w-[320px]': isOpen,
        'w-16': !isOpen,
      })}
    >
      <div
        className={clsx(' flex justify-center items-center gap-1', {
          'w-36': isOpen,
          'w-14 ': !isOpen,
        })}
      >
        <Atom
          className={clsx('text-cyan-500 my-5', {
            'h-10 w-10': isOpen,
            'h-8 w-8': !isOpen,
          })}
        />
        {isOpen && <Heading size='sm'>wstside</Heading>}
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'flex items-center m-3 gap-3 font-medium cursor-pointer',
          {
            'justify-end': isOpen,
            'justify-center': !isOpen,
          }
        )}
      >
        <ArrowIcon size={24} className='text-white' />
        {isOpen && <Text size='sm'>Reduce</Text>}
      </div>

      <div onClick={() => setIsOpen(!isOpen)} className={clsx('')}>
        <User size={24} className='text-white' />
        {isOpen && 'User Detail component'}
      </div>

      {/* <Styled.ButtonsGrid isClosed={!isOpen}>
        <NavButton onClick={() => setIsOpen} size={navButtonSize} icon='moneyTransfer'>
          Transferencia
        </NavButton>
        <NavButton onClick={() => setIsOpen} size={navButtonSize} icon='pix'>
          Cartões
        </NavButton>
        <NavButton onClick={() => setIsOpen} size={navButtonSize} icon='payment'>
          Pagamento
        </NavButton>
        <NavButton onClick={() => setIsOpen} size={navButtonSize} icon='topup'>
          Recarga
        </NavButton>
        <NavButton onClick={() => setIsOpen} size={navButtonSize} icon='calendar'>
          Agendamento
        </NavButton>
        <NavButton onClick={() => setIsOpen} size={navButtonSize} icon='cardMulti'>
          Cartões
        </NavButton>
      </Styled.ButtonsGrid> */}

      {/* <Styled.CloseNavBar isClosed={!isOpen}>
        <Icon name='cancel' width={24} height={24} />
        {isOpen && <Typography variant='caption'>Sair</Typography>}
      </Styled.CloseNavBar> */}
    </div>
  )
}

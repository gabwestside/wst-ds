import { useState } from 'react'
import { Atom } from 'phosphor-react'

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='w-full'>
      <div>
        <Atom className='text-cyan-500 h-8 w-8' />
      </div>

      <div onClick={() => setIsOpen(!isOpen)}>
        <img />
        {isOpen && <caption>Reduzir</caption>}
      </div>

      {/* <Styled.AccountDetail onClick={() => setIsOpen(!isOpen)} isClosed={!isOpen}>
        <Icon name='user' width={24} height={24} />
        {isOpen && 'User Detail component'}
      </Styled.AccountDetail>

      <Styled.ButtonsGrid isClosed={!isOpen}>
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
      </Styled.ButtonsGrid>

      <Styled.CloseNavBar isClosed={!isOpen}>
        <Icon name='cancel' width={24} height={24} />
        {isOpen && <Typography variant='caption'>Sair</Typography>}
      </Styled.CloseNavBar> */}
    </div>
  )
}

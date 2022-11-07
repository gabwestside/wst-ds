import { Money, Tray, CreditCard, Warning } from 'phosphor-react'

export interface NavButtonProps {
  icon: 'money' | 'tray' | 'creditCard'
  size?: 'sm' | 'md' | 'lg'
  children?: string
}

export const NavButton: React.FC<NavButtonProps> = ({
  size = 'md',
  icon,
  children = 'NavButton',
}) => {
  const Icon = (icon: string) => {
    const IconStyles = 'w-6 h-6 text-cyan-500'
    switch (icon) {
      case 'money':
        return <Money className={IconStyles} />
      case 'tray':
        return <Tray className={IconStyles} />
      case 'creditCard':
        return <CreditCard className={IconStyles} />
      default:
        return <Warning className={IconStyles} />
    }
  }

  const returnElement = (size: string) => {
    switch (size) {
      case 'sm':
        return (
          <div className='flex flex-col justify-center items-center w-[48px] h-[48px] py-2 px-1 ring-1 ring-cyan-300 rounded-2xl shadow-slate-50 cursor-pointer bg-transparent overflow-hidden font-bold text-[12px] hover:ring-opacity-60 transition-all duration-500'>
            {Icon(icon)}
          </div>
        )
      case 'lg':
        return (
          <div className='flex flex-row justify-start items-center w-40 h-14 p-2 gap-2 text-xs ring-1 ring-cyan-300 rounded-2xl shadow-slate-50 cursor-pointer bg-transparent overflow-hidden font-bold hover:ring-opacity-60 transition-all duration-500'>
            {Icon(icon)}
            <div className='w-[78px] h-[30px] text-gray-200 flex justify-center items-center overflow-hidden'>
              {children}
            </div>
          </div>
        )

      default:
        return (
          <div className='flex flex-col justify-center items-center w-[80px] h-[80px] py-2 px-1 ring-1 ring-cyan-300 rounded-2xl shadow-slate-50 cursor-pointer bg-transparent overflow-hidden font-bold text-[12px] text-center hover:ring-opacity-60 transition-all duration-500'>
            {Icon(icon)}
            <div className='w-[78px] h-[30px] text-gray-200 flex justify-center items-center overflow-hidden'>
              {children}
            </div>
          </div>
        )
    }
  }

  return returnElement(size)
}

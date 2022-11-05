import { clsx } from 'clsx'
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
    switch (icon) {
      case 'money':
        return <Money className={clsx('w-6 h-6 text-cyan-500', {})} />
      case 'tray':
        return <Tray className={clsx('w-6 h-6 text-cyan-500', {})} />
      case 'creditCard':
        return <CreditCard className={clsx('w-6 h-6 text-cyan-500', {})} />
      default:
        return <Warning className={clsx('w-6 h-6 text-cyan-500', {})} />
    }
  }

  const returnElement = (size: string) => {
    switch (size) {
      case 'sm':
        return (
          <div className=
            'flex flex-col justify-center items-center w-[54px] h-[54px] py-2 px-1 ring-1 ring-cyan-300 rounded-2xl shadow-slate-50 cursor-pointer bg-transparent overflow-hidden font-bold text-[12px] hover:ring-opacity-60 transition-colors delay-1000'
          >
            {Icon(icon)}
          </div>
        )
      case 'lg':
        return (
          <div className=
            'flex flex-row justify-start items-center w-40 h-14 p-2 gap-2 text-xs ring-1 ring-cyan-300 rounded-2xl shadow-slate-50 cursor-pointer bg-transparent overflow-hidden font-bold hover:ring-opacity-60 transition-colors delay-1000'
          >
            {Icon(icon)}
            <div className='w-[78px] h-[30px] text-gray-200 flex justify-center items-center overflow-hidden'>
              {children}
            </div>
          </div>
        )

      default:
        return (
          <div className=
            'flex flex-col justify-center items-center w-[90px] h-[90px] py-2 px-1 ring-1 ring-cyan-300 rounded-2xl shadow-slate-50 cursor-pointer bg-transparent overflow-hidden font-bold text-[12px] hover:ring-opacity-60 transition-colors delay-1000' 
          >
            {Icon(icon)}
            <div 
              className=
                'w-[78px] h-[30px] text-gray-200 flex justify-center items-center overflow-hidden'
            >
              {children}
            </div>
          </div>
        )
    }
  }

  return returnElement(size)
}

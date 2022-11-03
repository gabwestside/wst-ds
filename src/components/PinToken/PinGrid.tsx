import React, { useRef } from 'react'

interface PinTokenProps {
  pin: Array<number | undefined>
  onPinChange: (pinEntry: number | undefined, index: number) => void
  isDisabled?: boolean
  children?: string
}

export const PinGrid: React.FC<PinTokenProps> = ({
  isDisabled = false,
  onPinChange,
  pin,
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([])
  const PIN_TOKEN_LENTGH = 6

  const changePinTokenFocus = (pinIndex: number) => {
    const ref = inputRefs.current[pinIndex]
    if (ref) {
      ref.focus()
    }
  }

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = event.target.value
    const pinNumber = Number(value.trim())
    if (isNaN(pinNumber) || value.length === 0) {
      return
    }

    if (pinNumber >= 0 && pinNumber <= 9) {
      onPinChange(pinNumber, index)

      if (index < PIN_TOKEN_LENTGH - 1) {
        changePinTokenFocus(index + 1)
      }
    }
  }

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const keyboardkeyCode = event.nativeEvent.code
    if (keyboardkeyCode !== 'Backspace') {
      return
    }

    if (pin[index] === undefined) {
      changePinTokenFocus(index - 1)
    } else {
      onPinChange(undefined, index)
    }
  }

  const onClick = (event: any, index: number) => {
    const value = event.target.value

    if (!value) {
      if (pin) {
        const nextValidPos = Number(pin.lastIndexOf(pin.length))
        changePinTokenFocus(nextValidPos + 1)
        return
      }

      changePinTokenFocus(0)
    }
  }

  return (
    <div className='flex flex-row items-center gap-4 justify-start'>
      {Array.from({ length: PIN_TOKEN_LENTGH }, (_, index) => (
        <input
          className='w-10 h-10 bg-gray-800 rounded-md border focus-within:ring-2 ring-cyan-300 border-gray-400 outline-none text-center text-lg text-gray-400'
          disabled={isDisabled}
          key={index}
          value={pin[index] || ''}
          ref={(item) => {
            if (item) {
              inputRefs.current[index] = item
            }
          }}
          onChange={(event) => onChange(event, index)}
          onKeyDown={(event) => onKeyDown(event, index)}
          onClick={(event) => onClick(event, index)}
        />
      ))}
    </div>
  )
}

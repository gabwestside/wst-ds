import { useState } from "react";
import { PinGrid } from "./PinGrid";

export interface PinTokenProps {
  disabled?: boolean
  onChangeToken: (pinToken: Array<number | undefined>) => void
}

export function PinToken({ disabled, onChangeToken }: PinTokenProps) {
  const [pin, setPin] = useState<Array<number | undefined>>(new Array())

  const onPinChanged = (pinEntry: number | undefined, index: number) => {
    const newPin = [...pin]
    newPin[index] = pinEntry
    setPin(newPin)
    // onChangeToken([...pin])
  }

  return (
    <PinGrid pin={pin} onPinChange={onPinChanged} isDisabled={disabled}/>
  )
}
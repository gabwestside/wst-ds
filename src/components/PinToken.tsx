import { useState } from "react";
import { PinGrid } from "./PinGrid";

export interface PinTokenProps {
  disabled?: boolean
}

export function PinToken({ disabled }: PinTokenProps) {
  const [pin, setPin] = useState<Array<number | undefined>>(new Array())

  const onPinChanged = (pinEntry: number | undefined, index: number) => {
    const newPin = [...pin]
    newPin[index] = pinEntry
    setPin(newPin)
  }

  return (
    <PinGrid pin={pin} onPinChange={onPinChanged} isDisabled={disabled}/>
  )
}
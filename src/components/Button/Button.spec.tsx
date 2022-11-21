import { render } from '@testing-library/react'
import { Button } from './'

describe('Button component', () => {
  it('should to be a button component', () => {
    const { getByTestId } = render(<Button>{`Money transfer`}</Button>)

    expect(getByTestId('button')).toEqual('Money transfer')
  })
})

export interface LoadingProps {
  children?: string
}

export const Loading = ({ children = 'Loading' }: LoadingProps) => {
  return (
    <div>{children}</div>
  )
}

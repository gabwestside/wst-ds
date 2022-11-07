export interface UserDetails {
  children?: string
}

export const UserDetails: React.FC<UserDetails> = ({
  children = 'UserDetails',
}) => {
  return (
    <div>{children}</div>
  )
}

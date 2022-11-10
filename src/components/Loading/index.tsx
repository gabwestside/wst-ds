export interface LoadingProps {
  text?: string
}

export const Loading = ({ text = 'Loading...' }: LoadingProps) => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-4 text-gray-400 font-bold bg-transparent opacity-90'>
      <div className='w-10 h-10 rounded-full border-4 border-gray-400 border-r-cyan-300 border-t-cyan-500 animate-spin'/>
      {text}
    </div>
  )
}

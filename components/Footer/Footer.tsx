import { GiColombia } from 'react-icons/gi'

export const Footer = () => {
  return (
    <footer className='p-4 bg-white/10'>
      <div className='flex items-center gap-2 max-w-3xl mx-auto'>
        <p className='font-mono'>Made in Colombia</p>
        <GiColombia size={24} />
      </div>
    </footer>
  )
}

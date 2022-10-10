import Link from 'next/link'
import classNames from 'classnames'
import { IconType } from 'react-icons'

type Props = {
  icon: IconType
  href: string
  isActive: boolean
}

export const NavigationItem = ({ icon, href, isActive }: Props) => {
  const Icon = icon
  return (
    <Link href={href} scroll={false}>
      <a className='flex'>
        <Icon size={24} />
      </a>
    </Link>
  )
}

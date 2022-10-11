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
      <a
        className={classNames('flex py-1 border-b-2 border-transparent', {
          'border-white': isActive,
          'hover:border-white/30': !isActive,
        })}
      >
        <Icon size={24} />
      </a>
    </Link>
  )
}

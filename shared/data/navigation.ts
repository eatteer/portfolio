import { IconType } from 'react-icons/lib'
import {
  IoCodeSlashOutline,
  IoPersonOutline,
  IoBagOutline,
  IoLogoLinkedin,
} from 'react-icons/io5'

export type Item = {
  text: string
  href: string
  icon: IconType
}

export const items = [
  {
    text: 'Introduction',
    href: '/#introduction',
    icon: IoCodeSlashOutline,
  },
  {
    text: 'About',
    href: '/#about',
    icon: IoPersonOutline,
  },
  {
    text: 'Portfolio',
    href: '/#portfolio',
    icon: IoBagOutline,
  },
  {
    text: 'Contact',
    href: '/#contact',
    icon: IoLogoLinkedin,
  },
]
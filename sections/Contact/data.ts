import { Contact } from './types'
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoWhatsapp,
  IoMail
} from 'react-icons/io5'

export const contacts: Contact[] = [
  { icon: IoLogoLinkedin, url: 'https://www.linkedin.com/in/ejuanvanegas/' },
  { icon: IoLogoGithub, url: 'https://github.com/eatteer' },
  { icon: IoLogoWhatsapp, url: 'https://wa.me/573128830617' },
  { icon: IoMail, url: 'mailto:e.juanvanegas@gmail.com' }
]
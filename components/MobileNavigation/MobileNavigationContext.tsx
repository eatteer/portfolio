import { useRouter } from 'next/router'
import { createContext, useState } from 'react'

type Context = {
  isOpen: boolean
  toggleOpen: () => void
  section: string
}

export const MobileNavigationContext = createContext({} as Context)

type Props = {
  children: React.ReactNode
}

export const MobileNavigationContextProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const section = router.asPath
  const toggleOpen = () => setIsOpen((prev) => !prev)

  const context: Context = {
    isOpen,
    toggleOpen,
    section,
  }
  return (
    <MobileNavigationContext.Provider value={context}>
      {children}
    </MobileNavigationContext.Provider>
  )
}

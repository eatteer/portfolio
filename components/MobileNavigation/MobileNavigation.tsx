import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoChevronUp } from 'react-icons/io5'
import { items } from '../../shared/data/navigation'
import { NavigationItem } from '../NavigationItem/NavigationItem'
import { MobileNavigationContext } from './MobileNavigationContext'

export const MobileNavigation = () => {
  const { isOpen, toggleOpen, section } = useContext(MobileNavigationContext)

  return (
    <div className='fixed bottom-0 right-0 m-4 lg:hidden'>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut' }}
          >
            <ul
              className='flex flex-col gap-8 p-4
                border border-white/10 rounded-lg
                backdrop-blur-sm bg-[#260819ce]'
            >
              {items.map((item) => {
                const { href, icon } = item
                return (
                  <li key={href} onClick={toggleOpen}>
                    <NavigationItem
                      icon={icon}
                      href={href}
                      isActive={section === href}
                    />
                  </li>
                )
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
      <button
        className='flex mt-4 p-4
          border border-white/10 rounded-lg
          backdrop-blur-sm bg-[#260819ce]'
        onClick={toggleOpen}
      >
        <IoChevronUp size={24} />
      </button>
    </div>
  )
}

import { useRouter } from 'next/router'
import { NavigationItem } from '../NavigationItem/NavigationItem'
import { items } from '../../shared/data/navigation'

export const Navigation = () => {
  const router = useRouter()
  const path = router.asPath

  return (
    <div className='hidden fixed bottom-0 right-0 m-4 lg:block'>
      <nav>
        <ul
          className='flex flex-col gap-8 p-4
          border border-white/10 rounded-lg
          backdrop-blur-sm bg-white/10'
        >
          {items.map((item) => {
            return (
              <li key={item.href}>
                <NavigationItem
                  icon={item.icon}
                  href={item.href}
                  isActive={path === item.href}
                />
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

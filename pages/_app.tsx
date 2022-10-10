import type { AppProps } from 'next/app'
import { MobileNavigationContextProvider } from '../components/MobileNavigation/MobileNavigationContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MobileNavigationContextProvider>
      <Component {...pageProps} />
    </MobileNavigationContextProvider>
  )
}

export default MyApp

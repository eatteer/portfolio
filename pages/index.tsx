import type { NextPage } from 'next'
import Head from 'next/head'

// HOOKS
import { useSetupAnimateOpacityOnIntersection } from '../hooks/useSetupAnimateOpacityOnIntersection'

// SECTIONS
import { Introduction } from '../sections/Introduction/Introduction'
import { About } from '../sections/About/About'
import { Portfolio } from '../sections/Portfolio/Portfolio'
import { Contact } from '../sections/Contact/Contact'

// COMPONENTS
import { Navigation } from '../components/Navigation/Navigation'
import { MobileNavigation } from '../components/MobileNavigation/MobileNavigation'
import { Footer } from '../components/Footer/Footer'

const Home: NextPage = () => {
  useSetupAnimateOpacityOnIntersection()
  return (
    <>
      <Head>
        <title>Juan Vanegas</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Introduction />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      {/* Render on viewport width size change */}
      <Navigation />
      <MobileNavigation />
    </>
  )
}

export default Home

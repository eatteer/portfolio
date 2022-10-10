import Image from 'next/image'
import { portfolio } from './data'

const Portfolio = () => {
  return (
    <section id='portfolio' className='_container'>
      <h2 className='mb-4 text-2xl font-mono font-bold'>Portfolio</h2>
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] grid-rows-none gap-4'>
        {portfolio.map((project) => {
          const { title, imageUrl, productionUrl, repositoryUrl, stack } =
            project
          return (
            <li key={title} className='flex'>
              <article className='flex flex-grow flex-col border border-white/20 rounded-lg'>
                <div className='relative aspect-video'>
                  <Image
                    className='rounded-tl-md rounded-tr-md object-cover'
                    layout='fill'
                    src={imageUrl}
                    alt={title}
                  />
                </div>
                <div
                  className='flex-grow p-4
                  rounded-bl-md rounded-br-md
                  backdrop-blur-sm bg-white/10'
                >
                  <h2 className='font-mono font-bold'>{title}</h2>
                  <p className='mb-2 text-sm'> was built with</p>
                  <ul className='flex flex-wrap gap-2'>
                    {stack.map((techName) => {
                      return (
                        <li
                          key={techName}
                          className='p-1 
                            border border-white/10 rounded
                            text-xs'
                        >
                          {techName}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Portfolio

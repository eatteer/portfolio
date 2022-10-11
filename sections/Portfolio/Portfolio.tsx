import { portfolio } from './data'
import { IoLogoGithub } from 'react-icons/io5'

export const Portfolio = () => {
  return (
    <section id='portfolio' className='vessel apoi-hidden'>
      <h2 className='mb-4 text-2xl font-mono font-bold'>Portfolio</h2>
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] grid-rows-none gap-4'>
        {portfolio.map((project) => {
          const { title, imageUrl, productionUrl, repositoryUrl, stack } =
            project
          return (
            <li key={imageUrl} className='flex'>
              <article className='flex flex-col border border-white/20 rounded-lg'>
                <img
                  className='rounded-tl-md rounded-tr-md aspect-video object-cover'
                  src={imageUrl}
                  alt={title}
                />
                <div
                  className='flex flex-col justify-between flex-grow p-4
                  rounded-bl-md rounded-br-md
                bg-white/10'
                >
                  <h2 className='font-mono font-bold'>{title}</h2>
                  <p className='mb-2 text-sm'> was built with</p>
                  <ul className='flex flex-wrap gap-2 mb-4'>
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
                  <a
                    className='button'
                    href={repositoryUrl}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Source code <IoLogoGithub size={24} />
                  </a>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

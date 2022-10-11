import { education, skills } from './data'
import { EducationList } from './components/EducationList/EducationList'
import { Skills } from './components/Skills/Skills'
import { IoCloudDownloadOutline } from 'react-icons/io5'

export const About = () => {
  return (
    <section id='about' className='vessel apoi-hidden'>
      <section className='mb-4'>
        <h2 className='text-2xl font-mono font-bold'>
          Passionate Web Developer
        </h2>
        <p>
          Let me introduce myself. I am self-taught, curious and passionate
          about software development, especially web. I love to understand,
          scrutinize and build software. And of course a lover of cats,
          videogames, anime and motorcycles.
        </p>
      </section>
      <section className='mb-4'>
        <h2 className='text-2xl font-mono font-bold mb-4'>Education</h2>
        <EducationList education={education} />
        <a className='button w-fit mt-4' href='CV.pdf' download='CV.pdf'>
          Download CV
          <IoCloudDownloadOutline size={24} />
        </a>
      </section>
      <section>
        <h2 className='text-2xl font-mono font-bold mb-4'>Skills</h2>
        <Skills skills={skills} />
      </section>
    </section>
  )
}

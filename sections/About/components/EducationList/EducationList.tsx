import { Education } from '../../types'

type Props = {
  education: Education[]
}

export const EducationList = ({ education }: Props) => {
  return (
    <ul
      className='relative flex flex-col gap-4 pl-4
      after:absolute after:top-0 after:left-0 after:bottom-0 after:w-[2px] after:bg-white'
    >
      {education.map((e) => {
        const { degree, academy, period } = e
        return (
          <li key={degree} className='relative'>
            <article
              className='after:absolute after:top-[8px] after:left-[-15px] 
              after:translate-x-[-50%] 
              after:w-[8px] after:h-[8px] 
              after:rounded-full 
              after:bg-white'
            >
              <h3 className='font-mono font-bold'>{degree}</h3>
              <p>{academy}</p>
              <p className='font-mono font-bold'>{period}</p>
            </article>
          </li>
        )
      })}
    </ul>
  )
}

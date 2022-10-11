import { Skill } from '../../types'

type Props = {
  skills: Skill[]
}
export const Skills = ({ skills }: Props) => {
  return (
    <ul className='flex flex-wrap gap-2'>
      {skills.map((skill) => {
        const { name } = skill
        return (
          <li
            key={name}
            className='p-2 border border-white/10 rounded-md font-mono bg-white/10'
          >
            {name}
          </li>
        )
      })}
    </ul>
  )
}

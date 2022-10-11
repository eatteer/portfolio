import { contacts } from './data'
import { IoSend } from 'react-icons/io5'

export const Contact = () => {
  return (
    <section id='contact' className='vessel apoi-hidden'>
      <h2 className='mb-4 text-2xl font-mono font-bold'>Contact</h2>
      <div className='flex gap-4 mb-4'>
        {contacts.map((contact) => {
          const { icon, url } = contact
          const Icon = icon
          return (
            <a key={url} href={url} target='_blank' rel='noreferrer'>
              <Icon size={32} />
            </a>
          )
        })}
      </div>
      <h3 className='mb-4 text-xl font-mono font-bold'>Send me a message</h3>
      <form className='flex flex-col items-start gap-4 mb-4'>
        <div className='flex flex-col lg:flex-row justify-between gap-4 w-full'>
          <div className='input-field'>
            <label className='label' htmlFor='name'>
              Name
            </label>
            <input className='input' type='text' id='name' />
          </div>
          <div className='input-field'>
            <label className='label' htmlFor='email'>
              Email
            </label>
            <input className='input' type='text' id='email' />
          </div>
        </div>
        <div className='input-field'>
          <label className='label' htmlFor='message'>
            Message
          </label>
          <textarea className='input resize-none' id='message'></textarea>
        </div>
        <button className='button'>
          Submit <IoSend />
        </button>
      </form>
    </section>
  )
}

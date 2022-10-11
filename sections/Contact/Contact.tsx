import { contacts } from './data'
import { IoSend } from 'react-icons/io5'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import axios from 'axios'
import { ContactFormSchema } from './types'

const initialContactFormData: ContactFormSchema = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export const Contact = () => {
  const [contactFormData, setContactFormData] = useState<ContactFormSchema>(
    initialContactFormData
  )

  const handleOnChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { id, value } = event.target
    setContactFormData((prev) => {
      return { ...prev, [id]: value }
    })
  }

  const handleOnChangeTextArea: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    const { id, value } = event.target
    setContactFormData((prev) => {
      return { ...prev, [id]: value }
    })
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    const response = await axios.post<{ message: string }>(
      '/api/email',
      contactFormData
    )
    const { data } = response
    console.log(data)
  }

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
      {/* <h3 className='mb-4 text-xl font-mono font-bold'>Send me a message</h3> */}
      <h3 className='text-xl font-mono font-bold'>
        Form temporarily disabled!
      </h3>
      <p className='mb-4'>But you can use my social networks to contact me</p>
      <form
        className='flex flex-col items-start gap-4 mb-4'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col lg:flex-row justify-between gap-4 w-full'>
          <div className='input-field'>
            <label className='label' htmlFor='name'>
              Name
            </label>
            <input
              className='input'
              type='text'
              id='name'
              disabled
              onChange={handleOnChangeInput}
            />
          </div>
          <div className='input-field'>
            <label className='label' htmlFor='email'>
              Email
            </label>
            <input
              className='input'
              type='email'
              id='email'
              disabled
              onChange={handleOnChangeInput}
            />
          </div>
        </div>
        <div className='input-field'>
          <label className='label' htmlFor='subject'>
            Subject
          </label>
          <input
            className='input'
            type='text'
            id='subject'
            disabled
            onChange={handleOnChangeInput}
          />
        </div>
        <div className='input-field'>
          <label className='label' htmlFor='message'>
            Message
          </label>
          <textarea
            className='input resize-none'
            id='message'
            disabled
            onChange={handleOnChangeTextArea}
          ></textarea>
        </div>
        <button className='button' type='submit' disabled>
          Submit <IoSend />
        </button>
      </form>
    </section>
  )
}

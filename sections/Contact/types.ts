import { IconType } from "react-icons"

export type Contact = {
  icon: IconType
  url: string
}

export type ContactFormSchema = {
  name: string
  email: string
  subject: string
  message: string
}
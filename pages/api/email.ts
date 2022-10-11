import { NextApiHandler } from "next";
import { MailtrapClient, Mail } from 'mailtrap'
import { ContactFormSchema } from "../../sections/Contact/types";

const token = process.env.MAILTRAP_TOKEN as string
const sourceEmail = process.env.MAILTRAP_SOURCE_EMAIL as string
const destinationEmail = process.env.MAILTRAP_DESTINATION_EMAIL as string

const handler: NextApiHandler = async (req, res) => {
  const { name, email, subject, message } = req.body as ContactFormSchema

  const client = new MailtrapClient({ token })

  const mail: Mail = {
    from: {
      name, email: sourceEmail
    },
    to: [{ email: destinationEmail }],
    subject,
    text: message + `\n ${email}`
  }

  const sendResponse = await client.send(mail)

  if (!sendResponse.success) {
    res.json({ message: 'Something went wrong' })
  }

  res.json({ message: 'Email sent successfully' })
}
export default handler
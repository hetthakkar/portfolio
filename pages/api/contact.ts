// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

type Data = {
  status: 'success'| 'error'
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const msg = {
        to: process.env.MAIL_TO!,
        from: process.env.MAIL_FROM!,
        subject: 'New contact message from portfolio website',
        text: `
          Name: ${req.body.name}
          Email: ${req.body.email}
          Message: ${req.body.message}
        `,
      }
      await sgMail.send(msg)
      res.status(200).json({ status: 'success' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ status: 'error' })
    }
  }

  return;
}

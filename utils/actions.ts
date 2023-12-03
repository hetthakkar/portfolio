"use server"

import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)


export async function submitForm(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  console.log(name, email, message);

  try {
    const msg = {
      to: process.env.MAIL_TO!,
      from: process.env.MAIL_FROM!,
      subject: 'New contact message from portfolio website',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    }
    await sgMail.send(msg)

  } catch (error) {
    console.error(error)
  }
}
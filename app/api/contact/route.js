// app/api/contacts/route.ts
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/app';

export default async function handler(request) {
  // check the request method
  if (request.method === 'POST') {
    // get the form inputs from the request body
    const { name, email, message } = await request.json();
    // validate the inputs
    if (!name || !email || !message) {
      // return an error if any input is missing
      return new NextResponse(
        JSON.stringify({ message: 'Please fill all the fields.' }),
        { status: 400 }
      );
    }
    // create a transporter object using nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'kundanakakk@gmail.com',
          pass: 'Csebddy3@621@h',
        },
    });
    // create an email options object
    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.EMAIL_TO,
      subject: 'New message from contact form',
      text: message,
    };
    // send the email using the transporter and the mail options
    try {
      await transporter.sendMail(mailOptions);
      // return a success message if the email was sent
      return new NextResponse(
        JSON.stringify({ message: 'Your message has been sent.' }),
        { status: 200 }
      );
    } catch (error) {
      // handle any errors
      return new NextResponse(
        JSON.stringify({ message: error.message }),
        { status: 500 }
      );
    }
  } else {
    // return a method not allowed error if the request method is not POST
    return new NextResponse('Method not allowed', { status: 405 });
  }
}

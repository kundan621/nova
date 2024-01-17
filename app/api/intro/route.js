//http://localhost:3000/api/intro
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function GET(request){
    const users=[
        {id:1, name: 'John'},
        {id:2, name: 'jane'},
        {id:3, name: 'bob'}
    ];

    return new Response(JSON.stringify(users))
}
export async function POST(req, res) {
    console.log('Post method invoked');
    let name;
    let email;
    let message;
    // const { name, email, message } = await req.json();
    try {
        console.log('Post method invoked');
        
        const data = await req.json();  // Parse the JSON body
        console.log('Received datas:', data);
        name = data.name;
        email = data.email;
        message = data.message;
      } catch (error) {
        console.error('Error processing request:', error);
        }
        console.log('Calling nodeMailer');
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'hksoftwares81@gmail.com',
              pass: 'hohb nmce semg fyzm'
            },
        });
        const mailOptions = {
            from: `${name} <${email}>`,
            to: 'hksoftwares81@gmail.com',
            subject: 'New message from contact form',
            text: message,
          };
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

    }

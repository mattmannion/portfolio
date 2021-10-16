import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import {
  email_dest,
  email_host,
  email_pass,
  email_port,
  email_user,
} from '../../env';

type Data = {
  info?: SMTPTransport.SentMessageInfo;
  message: string;
  status: string;
};

interface ContactReqBodyIF {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
}

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST' || req.method === 'post' || req.method === 'Post') {
    const { firstname, lastname, email, subject, message }: ContactReqBodyIF =
      req.body;

    const transporter = nodemailer.createTransport({
      port: email_port,
      host: email_host,
      auth: {
        user: email_user,
        pass: email_pass,
      },
    });

    const text = `
FROM:  ${firstname} ${lastname} 
EMAIL: ${email}.

${message}
    `;

    transporter.sendMail(
      {
        from: email_user,
        to: email_dest,
        subject,
        text,
      },
      function (err, info) {
        if (err) {
          res.status(400).json({
            message: 'Something went wrong! Email not sent...',
            status: 'Failure',
          });
          console.log(err);
        }
        if (info) {
          res.status(200).json({
            info,
            message: 'Email was sent!',
            status: 'Success',
          });
        }
      }
    );
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};

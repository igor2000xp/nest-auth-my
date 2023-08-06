// export const mailTemplate = {
//   to: 'power.rangers.backend@gmail.com',
//   from: 'power.rangers.backend@gmail.com',
//   subject: 'Change password TWSend',
//   text: 'Welcome NestJS Email Sending Tutorial',
// };

// import { Message } from 'emailjs';

export const clientData = {
  user: 'power.rangers.backend@gmail.com',
  password: 'zeibvdcfocuubfbb',
  host: 'smtp.gmail.com',
  port: 587,
  // tls: true,
};

export const messageData = {
  text: 'Welcome NestJS Email Sending Tutorial',
  from: 'power.rangers.backend@gmail.com',
  to: 'power.rangers.backend@gmail.com',
  // cc: 'else <else@your-email.com>',
  subject: 'Change password TWSend emailjs',
  // text: 'Welcome NestJS Email Sending Tutorial',
};

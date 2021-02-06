/* eslint-disable max-len */
/* eslint-disable global-require */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => new Promise((resolve, reject) => {
  const API_KEY = process.env.MAILGUN_API_KEY;
  const DOMAIN = 'tolulawson.com';
  const mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });

  const {
    name, email, subject, message,
  } = req.body;

  const data = {
    from: 'Tolulawson.com <website@tolulawson.com>',
    to: 'lawsontolu1@gmail.com',
    subject: 'New message from tolulawson.com',
    text: `Sender: ${name} <${email}>\nSubject: ${subject}\nMessage: ${message}`,
  };

  mailgun.messages().send(data, (error, body) => {
    if (error) {
      res.status(400).json({ success: false });
      res.end();
      reject(error);
    } else {
      res.status(200).json({ success: false });
      resolve(body);
    }
  });
});

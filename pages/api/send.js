// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  return new Promise((resolve, reject) => {
    const API_KEY = process.env.MAILGUN_API_KEY;
    const DOMAIN = 'tolulawson.com';
    const mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

    const data = {
      from: 'Tolulawson.com <website@tolulawson.com>',
      to: 'lawsontolu1@gmail.com',
      subject: 'New message from tolulawson.com',
      text: `Sender: ${req.body.name} <${req.body.email}>\nSubject: ${req.body.subject}\nMessage: ${req.body.message}`,
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
}
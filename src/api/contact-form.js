const postmark = require('postmark');

const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

export default function contactFormHandler(req, res) {
  console.log('body: ', req.body.data);

  client
    .sendEmail({
      From: 'justin@typeworks.io',
      To: 'justin@typeworks.io',
      Subject: 'Hello from Postmark',
      HtmlBody: '<strong>Hello</strong> dear Postmark user.',
      TextBody: 'Hello from Postmark!',
      MessageStream: 'broadcast',
    })
    .then(() => {
      console.log('Email sent!');
      return res.status(200).send('Email sent');
    })
    .catch((err) => {
      res.status(500).send(err);
    });

  res.status(200).json({ hello: `world` });
}

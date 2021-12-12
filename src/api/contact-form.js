const postmark = require('postmark');

const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

export default function contactFormHandler(req, res) {
  const { firstName, lastName, email, phone, subject, message } = req.body;

  client
    .sendEmail({
      From: 'hello@typeworks.io',
      To: 'justin@typeworks.io',
      Subject: subject,
      HtmlBody: `<strong>Hello ${firstName}</strong> dear Suncoast Masons website user. <br> ${message} <br> ${firstName} ${lastName} <br> ${email} <br> ${phone}`,
      TextBody: message,
      MessageStream: 'contact-form',
    })
    .then(() => {
      return (
        res.status(200) &&
        res.json({
          success: true,
          message: 'Email sent!',
        })
      );
    })
    .catch((err) => {
      return res.status(500) && res.json({ success: false, message: err });
    });
}

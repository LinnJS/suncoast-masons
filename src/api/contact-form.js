const postmark = require('postmark');

const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

export default function contactFormHandler(req, res) {
  const { firstName, lastName, email, phone, subject, message } = req.body;

  client.sendEmailWithTemplate({
    From: 'hello@typeworks.io',
    To: 'justin@typeworks.io',
    TemplateAlias: 'contact-form',
    MessageStream: 'contact-form',
    TemplateModel: {
      product_url: 'suncoastmasons.com',
      product_name: 'Suncoast Masons Website',
      subject,
      message,
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      company_name: 'Suncoast Masons',
      company_address: '705 South Hercules Avenue ClearwaterFL 33764-6317',
    },
  });

  try {
    return (
      res.status(500) &&
      res.json({
        success: false,
        message: 'Email sent!',
      })
    );
  } catch (error) {
    console.log('err: ', error);
    return res.status(500) && res.json({ success: false, message: error });
  }
}

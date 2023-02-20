const nodemailer = require('nodemailer');

exports.main = async (data) => {
  // Async function enables allows handling of promises with await
  try {
    // First, define send settings by creating a new transporter:
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // SMTP server address (usually mail.your-domain.com)
      port: 465, // Port for SMTP (usually 465)
      secure: true, // Usually true if connecting to port 465
      auth: {
        user: 'abdelrehmanmamdouh@gmail.com', // Your email address
        pass: 'aonvskzivvyckqgf', // Password (for gmail, your app password)
        // ⚠️ For better security, use environment variables set on the server for these values when deploying
      },
    });

    // Define and send message inside transporter.sendEmail() and await info about send from promise:
    let info = await transporter.sendMail({
      from: 'abdelrehmanmamdouh@gmail.com',
      to: 'memomeme621@gmail.com',
      subject: 'Job Oppertunity',
      text: data,
    });
    console.log(info.messageId); // Random ID generated after successful send (optional)
  } catch (err) {
    console.error(err);
  }
};


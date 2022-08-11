import nodemailer from "nodemailer";
import { google } from "googleapis";

const handler = async (req, res) => {
  const CLIENT_ID = '896856147373-pnq3vokq6j8ai63k7lcresqfi734c225.apps.googleusercontent.com';
  const CLIENT_SECRET = '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';
  const REDIRECT_URL = 'https://developers.google.com/oauthplayground/';
  const REFRESH_TOKEN = '1//04ACbCM4fbHBJCgYIARAAGAQSNwF-L9IrHZA3xArGhlUal_HwBWxx_B2eezOfFKreFF-lBoEQTeaS3xBeApDZ2O_JCqjli3WaGxI';
  const oAuth2client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
  oAuth2client.setCredentials({ refresh_token: REFRESH_TOKEN });
  try {
    const accesToken = await oAuth2client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "rackeragency@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accesToken
      },
      tls: { rejectUnauthorized: false }
    });
    const mailOptions = {
      from: `Racker Agency <rackeragency@gmail.com>`,
      to: "rackeragency@gmail.com",
      subject: "Client Project",
      html: `
      <h1 style="color: purple;" >Racker Agency</h1>
      <p style="font-size: 16px; font-weight: 600; text-transform: capitalize;" >Full Name: <span style="color: #4a8aca; text-decoration: underline;" > ${req.body.firstName} ${req.body.lastName}</span></P>
      <p style="font-size: 16px; font-weight: 600; text-transform: capitalize;">Contact: <span style="color: #4a8aca; text-decoration: underline;" > ${req.body.phoneNo}</span></P>
      <p style="font-size: 16px; font-weight: 600; text-transform: capitalize;">Email: <span style="color: #4a8aca; text-decoration: underline;" > ${req.body.email} </span></P><br/>
      <p style="font-size: 20px; font-weight: 600; text-transform: capitalize;" ><span style="color: purple;" >${req.body.message}</span></p>
      `
    };
    const mailOptions2 = {
      from: `Racker Agency <rackeragency@gmail.com>`,
      to: req.body.email,
      subject: "Racker Agency",
      html: `
      <h1 style="color: purple;" >Welcome To Racker Agency.</h1><br/>
      <p style="font-size: 20px; font-weight: 600;" >Thankyou! for Contacting us.</p><br/>
      <p style="font-weight: 600; font-size: 17px;" ><span style="color: purple; text-transform: capitalize;" >${req.body.firstName} ${req.body.lastName},</span> we'll discuss about your project in detail contact us <span style="color: purple; text-decoration: underline;" >0310-2223511</span></P>
      `
    }
    transport.sendMail(mailOptions);
    transport.sendMail(mailOptions2)
    res.status(200).json({ success: true, message: "Thank you for contacting." });
  } catch (err) {
    res.status(500).json({ success: false, message: "Sorry! didn't contact." })
  }
}

export default handler

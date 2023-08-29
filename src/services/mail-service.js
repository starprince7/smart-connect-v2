import Mailgun from "mailgun-js";
import formData from "form-data";
const BASE_URL = process.env.MAILGUN_DOMAIN;
const apiKey = process.env.MAILGUN_PRIVATE_KEY;

if (!apiKey) throw new Error("Your mailgun API_KEY was not found!");

const mailgun = new Mailgun(formData);

const authCredentials = {
  username: "api",
  key: apiKey,
  url: "https://api.mailgun.net/",
};

const mailgunClient = mailgun.client(authCredentials);
const domain = BASE_URL;

const mailer = async (mailOptions) => {
  return mailgunClient.messages.create(domain, mailOptions);
};

export default mailer;

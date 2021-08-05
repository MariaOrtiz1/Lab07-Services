const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendSms = (to, message) => {
  return client.messages.create({
    body: message,
    from: process.env.TWILIO_NUMBER,
    to: process.env.CLIENT_NUMBER,
  });
};

module.exports = { sendSms };

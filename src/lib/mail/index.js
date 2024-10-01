import nodemailer from "nodemailer";
import getHtml from "../template/reg";
const cb = (err, info) => {
  // if (err) {
  //   console.log("##ERR");
  //   console.log(err);
  // } else {
  //   console.log("##SUP?");
  //   console.log(info);
  // }
};

export default function sendEmail(email, name, waLink, eventName) {
  const transporterOptions = {
    service: "Gmail",
    auth: {
      user: process.env.NODEMAILER_USERNAME,
      pass: process.env.NODEMAILER_PASSWORD,
    },
    from: "Momentum 2024",
  };
  let transporter = nodemailer.createTransport(transporterOptions);
  const mail = {
    to: email,
    subject: "Momentum 2024 Registration Successfull!",
    replyTo: "registration-momentum2022@ncuindia.edu",
    html: getHtml(name, waLink, eventName),
  };
  transporter.sendMail(mail, cb);
}

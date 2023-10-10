const { createTransport } = require("nodemailer");
const { config } = require("../../config");


class EmailManager{
  static instance;
  constructor(){
    if(EmailManager.instance) return EmailManager.instance;
    EmailManager.instance = this;
    this.transport = null;
    this.setTransport();
  }

  setTransport(){
    this.transport = createTransport({
      service: 'gmail',
      port: 587,
      secure: true,
      auth: {
        user: config.node_mailer_user,
        pass: config.node_mailer_password
      }
    });
  }

  async sendEmail({from, to, subject, html, attachments}){
    return await this.transport.sendMail({
      from,
      to,
      subject,
      html,
      attachments
    })
  }
}

module.exports = new EmailManager();
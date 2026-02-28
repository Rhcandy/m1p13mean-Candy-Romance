const nodemailer = require("nodemailer");
require("dotenv").config();

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Fonction pour générer les templates HTML
const generateEmailTemplate = (type, params) => {
  const { email, confirmPassword } = params;


  if (type === "reset") {
    return {
      subject: `Réinitialisation mot de passe - ${process.env.APP_NAME}`,
      html: `
      <div style="font-family: Arial; max-width: 600px; margin: auto;">
        <h2>Réinitialisation</h2>
        <p>Email: ${email}</p>
        <p>Veuillez entrer ce code pour réinitialiser votre mot de passe.</p>
        <strong>${confirmPassword}</strong>
        elle n'est valide que pour 10 minutes.
        <p>Si vous n'avez pas demandé de réinitialisation de mot de passe, veuillez ignorer cet email.</p>
        <p>Merci de ne pas répondre à cet email.</p>
        <p>Cordialement,</p>
        <p>${process.env.APP_NAME}</p>
        <p>${process.env.APP_URL}</p>
      </div>
      `,
    };
  }

  throw new Error("Type d’email non supporté");
};

// Fonction d'envoi
const sendEmail = async (type, params) => {
  try {
    const template = generateEmailTemplate(type, params);

    const info = await transport.sendMail({
      from: `"${process.env.APP_NAME}" <${process.env.EMAIL_USER}>`,
      to: params.email,
      subject: template.subject,
      html: template.html,
    });

    return {
      status: 200,
      data: info.response,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { sendEmail };

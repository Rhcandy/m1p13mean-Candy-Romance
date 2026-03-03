const SibApiV3Sdk = require("sib-api-v3-sdk");
require("dotenv").config();

const defaultClient = SibApiV3Sdk.ApiClient.instance;

const sanitizeEnvValue = (value) => String(value ?? "").trim().replace(/^['"]|['"]$/g, "");

const maskSecret = (value) => {
  if (!value) return "undefined";
  if (value.length <= 12) return `${value.slice(0, 4)}...`;
  return `${value.slice(0, 8)}...${value.slice(-6)}`;
};

const configureBrevoClient = () => {
  const apiKeyValue = sanitizeEnvValue(process.env.BREVO_API_KEY || process.env.BREVO_API_V3_KEY);

  if (!apiKeyValue) {
    throw new Error("BREVO_API_KEY manquant dans les variables d'environnement");
  }

  if (!apiKeyValue.startsWith("xkeysib-")) {
    console.warn("[Brevo] Format de cle inattendu. Verifie que c'est bien une cle API v3.");
  }

  const apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey = apiKeyValue;

  return apiKeyValue;
};

const getSender = () => {
  const senderEmail = sanitizeEnvValue(process.env.EMAIL_USER || process.env.BREVO_SENDER_EMAIL);
  const senderName = sanitizeEnvValue(process.env.APP_NAME) || "No Reply";

  if (!senderEmail) {
    throw new Error("BREVO_SENDER_EMAIL (ou EMAIL_USER) manquant");
  }

  return {
    name: senderName,
    email: senderEmail
  };
};

// Generate HTML templates
const generateEmailTemplate = (type, params) => {
  const { email, confirmPassword } = params;
  const appName = process.env.APP_NAME || "Royal Center";
  const appUrl = process.env.APP_URL || "";

  if (type === "reset") {
    return {
      subject: `Réinitialisation de mot de passe – ${appName}`,
      html: `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Réinitialisation mot de passe</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f7;font-family:Georgia,serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f7;padding:40px 0;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%);padding:40px 48px;text-align:center;">
              <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:4px;color:#a0aec0;text-transform:uppercase;">Sécurité du compte</p>
              <h1 style="margin:0;font-size:28px;font-weight:normal;color:#ffffff;letter-spacing:1px;">Royal Center</h1>
              <div style="width:40px;height:2px;background:#e2b96f;margin:16px auto 0;"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:48px 48px 32px;">

              <p style="margin:0 0 8px;font-size:13px;color:#a0aec0;letter-spacing:1px;text-transform:uppercase;">Bonjour,</p>
              <h2 style="margin:0 0 24px;font-size:22px;font-weight:normal;color:#1a1a2e;">Réinitialisation de mot de passe</h2>

              <p style="margin:0 0 24px;font-size:15px;color:#4a5568;line-height:1.7;">
                Nous avons reçu une demande de réinitialisation du mot de passe associé à l'adresse
                <strong style="color:#1a1a2e;">${email}</strong>.
                Utilisez le code ci-dessous pour procéder.
              </p>

              <!-- Code block -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin:32px 0;">
                <tr>
                  <td align="center" style="background:#f7f8fc;border:1px solid #e2e8f0;border-radius:10px;padding:28px;">
                    <p style="margin:0 0 8px;font-size:11px;letter-spacing:3px;color:#a0aec0;text-transform:uppercase;">Votre code de vérification</p>
                    <p style="margin:0;font-size:38px;font-weight:bold;letter-spacing:10px;color:#0f3460;font-family:'Courier New',monospace;">${confirmPassword}</p>
                  </td>
                </tr>
              </table>

              <!-- Timer warning -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background:#fffbeb;border-left:4px solid #e2b96f;border-radius:4px;padding:14px 18px;">
                    <p style="margin:0;font-size:13px;color:#92400e;">
                      ⏱ Ce code est valide pendant <strong>15 minutes</strong> uniquement.
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 8px;font-size:13px;color:#718096;line-height:1.7;">
                Si vous n'êtes pas à l'origine de cette demande, ignorez simplement cet email. Votre mot de passe ne sera pas modifié.
              </p>

            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 48px;">
              <div style="height:1px;background:#e2e8f0;"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:28px 48px 40px;text-align:center;">
              <p style="margin:0 0 4px;font-size:12px;color:#a0aec0;">Merci de ne pas répondre directement à cet email.</p>
              <p style="margin:0;font-size:12px;color:#a0aec0;">
                © ${new Date().getFullYear()} ${appName}
                ${appUrl ? `· <a href="${appUrl}" style="color:#a0aec0;text-decoration:none;">${appUrl}</a>` : ""}
              </p>
            </td>
          </tr>

        </table>
        <!-- End Card -->

      </td>
    </tr>
  </table>

</body>
</html>
      `
    };
  }

  throw new Error("Type d'email non supporté");
};

// Send email via Brevo Transactional API
const sendEmail = async (type, params) => {
  try {
    configureBrevoClient();
    const transactionalApi = new SibApiV3Sdk.TransactionalEmailsApi();

    const template = generateEmailTemplate(type, params);

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.sender = getSender();
    sendSmtpEmail.to = [{ email: params.email }];
    sendSmtpEmail.subject = template.subject;
    sendSmtpEmail.htmlContent = template.html;

    const response = await transactionalApi.sendTransacEmail(sendSmtpEmail);
    console.log("Email envoye via Brevo:", response?.messageId || response);

    return {
      status: 200,
      data: response
    };
  } catch (error) {
    const brevoError = error?.response?.body;
    if (brevoError?.code === "unauthorized") {
      console.error(
        `[Brevo] unauthorized avec la cle ${maskSecret(sanitizeEnvValue(process.env.BREVO_API_KEY || process.env.BREVO_API_V3_KEY))}. ` +
        "Verifie la cle active dans l'environnement courant (local vs serveur), ses permissions et l'eventuelle presence d'une ancienne valeur en cache."
      );
    }
    console.error("Erreur envoi email Brevo:", error?.response?.body || error.message || error);
    throw error;
  }
};

// Optional helper based on Brevo "Create a campaign" configuration
const createEmailCampaign = async ({
  name,
  subject,
  htmlContent,
  listIds,
  scheduledAt,
  senderName,
  senderEmail
}) => {
  configureBrevoClient();
  const campaignsApi = new SibApiV3Sdk.EmailCampaignsApi();

  if (!Array.isArray(listIds) || listIds.length === 0) {
    throw new Error("listIds est requis pour creer une campagne Brevo");
  }

  const defaultSender = getSender();
  const emailCampaign = new SibApiV3Sdk.CreateEmailCampaign();

  emailCampaign.name = name || "Campaign sent via API";
  emailCampaign.subject = subject || "No subject";
  emailCampaign.sender = {
    name: senderName || defaultSender.name,
    email: senderEmail || defaultSender.email
  };
  emailCampaign.type = "classic";
  emailCampaign.htmlContent = htmlContent || "<p>Campaign content</p>";
  emailCampaign.recipients = { listIds };

  if (scheduledAt) {
    emailCampaign.scheduledAt = scheduledAt;
  }

  return campaignsApi.createEmailCampaign(emailCampaign);
};

module.exports = { sendEmail, createEmailCampaign };

const nodemailer = require('nodemailer');
const path = require('path');
const { SUBSCRIPTION_PLANS } = require('../utils/constants');
const { formatDate, eurosFromCents } = require('../utils/formatters');

let transporter;

function isEmailEnabled() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD);
}

function getTransporter() {
  if (!isEmailEnabled()) {
    return null;
  }

  if (!transporter) {
    const port = Number(process.env.SMTP_PORT || 465);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });
  }

  return transporter;
}

function getFromAddress() {
  return process.env.MAIL_FROM || `Permis-Go <${process.env.SMTP_USER}>`;
}

async function sendMail({ to, subject, text, html, attachments = [] }) {
  const mailer = getTransporter();
  if (!mailer) {
    console.warn('Email non envoye: configuration SMTP absente.');
    return;
  }

  try {
    await mailer.sendMail({
      from: getFromAddress(),
      to,
      subject,
      text,
      html,
      attachments
    });
  } catch (error) {
    console.error('Erreur envoi email:', error.message);
  }
}

function dashboardUrl() {
  return `${process.env.APP_URL || 'http://localhost:3000'}/dashboard`;
}

function settingsUrl() {
  return `${process.env.APP_URL || 'http://localhost:3000'}/settings`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderEmailLayout({ eyebrow, title, intro, body, ctaLabel, ctaUrl }) {
  const safeEyebrow = escapeHtml(eyebrow);
  const safeTitle = escapeHtml(title);
  const safeIntro = escapeHtml(intro);
  const cta = ctaLabel && ctaUrl
    ? `
      <tr>
        <td style="padding: 10px 0 4px;">
          <a href="${ctaUrl}" style="display: inline-block; padding: 14px 22px; border-radius: 999px; background: #1557c8; color: #ffffff; font-weight: 800; text-decoration: none;">
            ${escapeHtml(ctaLabel)}
          </a>
        </td>
      </tr>
    `
    : '';

  return `
    <!doctype html>
    <html lang="fr">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style="margin: 0; padding: 0; background: #eef5ff; color: #082357; font-family: Arial, Helvetica, sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #eef5ff; padding: 16px 8px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 620px; overflow: hidden; border-radius: 18px; background: #ffffff; border: 1px solid #dce6f4;">
                <tr>
                  <td style="padding: 22px 24px; background: #eef5ff;">
                    <img src="cid:permisgo-email-logo" width="220" height="59" alt="PermisGo" style="display: block; width: 220px; max-width: 100%; height: 59px; max-height: 59px; border: 0; outline: none; text-decoration: none; margin: 0 0 8px;" />
                    <div style="margin-top: 8px; color: #415173; font-size: 14px;">Reussis ton permis theorique</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 24px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding-bottom: 10px; color: #1557c8; font-size: 12px; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase;">
                          ${safeEyebrow}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 12px; color: #082357; font-size: 28px; line-height: 1.15; font-weight: 900;">
                          ${safeTitle}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 18px; color: #415173; font-size: 16px; line-height: 1.65;">
                          ${safeIntro}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 18px; border-radius: 14px; background: #f4f8fd; border: 1px solid #dce6f4; color: #082357; font-size: 15px; line-height: 1.7;">
                          ${body}
                        </td>
                      </tr>
                      ${cta}
                      <tr>
                        <td style="padding-top: 24px; color: #415173; font-size: 14px; line-height: 1.6;">
                          A bientot,<br />
                          <strong style="color: #082357;">L'equipe Permis-Go</strong>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 24px; background: #f4f8fd; color: #6a7895; font-size: 12px; line-height: 1.5;">
                    Email automatique Permis-Go.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function logoAttachment() {
  return {
    filename: 'permisgo-email-logo.png',
    path: path.join(__dirname, '..', 'public', 'images', 'permisgo-email-logo.png'),
    cid: 'permisgo-email-logo'
  };
}

async function sendRegistrationEmail(user) {
  return sendMail({
    to: user.email,
    subject: 'Bienvenue sur Permis-Go',
    text: [
      `Bonjour ${user.firstName},`,
      '',
      'Votre compte Permis-Go a bien ete cree.',
      `Vous pouvez acceder a votre tableau de bord ici: ${dashboardUrl()}`,
      '',
      'Bonne preparation,',
      "L'equipe Permis-Go"
    ].join('\n'),
    html: renderEmailLayout({
      eyebrow: 'Compte cree',
      title: `Bienvenue ${user.firstName}`,
      intro: 'Votre compte Permis-Go a bien ete cree.',
      body: `
        <p style="margin: 0 0 12px;">Vous pouvez maintenant acceder a votre tableau de bord, lancer vos series et suivre votre progression.</p>
        <p style="margin: 0;">Les series gratuites restent disponibles, et les formules premium debloquent les examens complets.</p>
      `,
      ctaLabel: 'Acceder au tableau de bord',
      ctaUrl: dashboardUrl()
    }),
    attachments: [logoAttachment()]
  });
}

async function sendSubscriptionActivatedEmail({ user, subscription, payment }) {
  const plan = SUBSCRIPTION_PLANS[subscription.planCode];
  const planName = plan?.name || subscription.planCode;
  const safePlanName = escapeHtml(planName);
  const amount = payment ? eurosFromCents(payment.amount) : '';

  return sendMail({
    to: user.email,
    subject: 'Votre abonnement Permis-Go est actif',
    text: [
      `Bonjour ${user.firstName},`,
      '',
      `Votre abonnement ${planName} est maintenant actif.`,
      `Fin d'acces: ${formatDate(subscription.endDate)}`,
      amount ? `Montant paye: ${amount}` : '',
      `Gerer mon compte: ${settingsUrl()}`,
      '',
      'Merci pour votre confiance,',
      "L'equipe Permis-Go"
    ].filter(Boolean).join('\n'),
    html: renderEmailLayout({
      eyebrow: 'Abonnement actif',
      title: 'Votre acces premium est active',
      intro: `Bonjour ${user.firstName}, votre abonnement ${planName} est maintenant disponible.`,
      body: `
        <p style="margin: 0 0 10px;"><strong>Formule:</strong> ${safePlanName}</p>
        <p style="margin: 0 0 10px;"><strong>Fin d'acces:</strong> ${formatDate(subscription.endDate)}</p>
        ${amount ? `<p style="margin: 0;"><strong>Montant paye:</strong> ${amount}</p>` : ''}
      `,
      ctaLabel: 'Gerer mon compte',
      ctaUrl: settingsUrl()
    }),
    attachments: [logoAttachment()]
  });
}

async function sendDeletionRequestEmail(user) {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

  await sendMail({
    to: user.email,
    subject: 'Demande de suppression recue',
    text: [
      `Bonjour ${user.firstName},`,
      '',
      'Votre demande de suppression de compte a bien ete recue.',
      "Un administrateur pourra la traiter prochainement.",
      '',
      "L'equipe Permis-Go"
    ].join('\n'),
    html: renderEmailLayout({
      eyebrow: 'Donnees personnelles',
      title: 'Demande bien recue',
      intro: `Bonjour ${user.firstName}, votre demande de suppression de compte a ete enregistree.`,
      body: `
        <p style="margin: 0;">Un administrateur pourra traiter votre demande prochainement. Vous gardez acces a votre compte tant que la suppression n'a pas ete effectuee.</p>
      `,
      ctaLabel: 'Voir mes parametres',
      ctaUrl: settingsUrl()
    }),
    attachments: [logoAttachment()]
  });

  if (adminEmail) {
    await sendMail({
      to: adminEmail,
      subject: 'Demande de suppression de compte',
      text: [
        'Une demande de suppression de compte a ete envoyee.',
        '',
        `Utilisateur: ${user.firstName} ${user.lastName}`,
        `Email: ${user.email}`,
        `ID: ${user.id}`
      ].join('\n')
    });
  }
}

module.exports = {
  sendRegistrationEmail,
  sendSubscriptionActivatedEmail,
  sendDeletionRequestEmail
};

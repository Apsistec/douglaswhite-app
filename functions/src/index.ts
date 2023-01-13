import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
admin.initializeApp();

// Sendgrid Config
import * as sgMail from '@sendgrid/mail';

interface Data {
  email: string;
  name: string;
  message: string;
}

const API_KEY: string = functions.config().sendgrid.key;
const TEMPLATE_ID: string = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

export const genericEmail = functions.https.onCall(async (data: Data) => {
  try {
    const msg = {
      to: 'doug@apsistec.app',
      from: data.email,
      templateId: TEMPLATE_ID,
      dynamic_template_data: {
        subject: 'Job Opportunity',
        name: data.name,
        email: data.email,
        message: data.message,
      },
    };
    await sgMail.send(msg);

    // Response must be JSON serializable
    return {
      header: `Thank you ${data.name}!`,
      message: 'Your message has been sent.',
    };
    // Handle errors here
  } catch (error) {
    return {
      header: 'Error',
      message: error,
    };
  }
});

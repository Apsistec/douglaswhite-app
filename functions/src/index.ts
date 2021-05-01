// Firebase Config
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

// Sendgrid Config
import * as sgMail from "@sendgrid/mail";

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

export const genericEmail = functions.https.onCall(async (data, context) => {
  const msg = {
    to: context.auth.token.email,
    from: data.email,
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
      subject: "Job Opportunity",
      name: data.name,
      message: data.message,
    },
  };

  await sgMail.send(msg);

  // Handle errors here

  // Response must be JSON serializable
  return {
    success: true,
  };
});

// Firebase Config
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

// Sendgrid Config
import * as sgMail from "@sendgrid/mail";

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

export const genericEmail = functions.https.onCall(async (data) => {
  try {
    const msg = {
      to: "doug@apsistec.app",
      from: data.email,
      templateId: TEMPLATE_ID,
      dynamic_template_data: {
        subject: "Job Opportunity",
        name: data.name,
        email: data.email,
        message: data.message,
      },
    };
    await sgMail.send(msg);

    // Response must be JSON serializable
    return {
      header: "Message Sent",
      message: "Your message has been sent. Douglas will respond asap!",
    };
    // Handle errors here
  } catch (error) {
    return {
      header: "Error",
      message: error.message,
    };
  }
});

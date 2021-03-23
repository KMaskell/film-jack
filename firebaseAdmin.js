const admin = require("firebase-admin");
const serviceAccount = require("./secrets.json");
// const serviceAccount = require("./secrets.js");

export const verifyIdToken = (token) => {
    if(!admin.apps.length) {
        admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        });
    }
    return admin
        .auth()
        .verifyIdToken(token)
        .catch((error) => {
            throw error;
        });
};
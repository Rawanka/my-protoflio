const functions = require('firebase-functions');
const next = require('next');
const app = next({ dev: false });
const handle = app.getRequestHandler();

exports.nextjsServer = functions.https.onRequest((req, res) => {
  return handle(req, res);
});

exports.handler = function(context, event, callback) {
  // REMINDER: This identity is only for prototyping purposes
  const IDENTITY = "client_user";

  const ACCOUNT_SID = context.ACCOUNT_SID;

  // set these values in your .env file
  const TWIML_APPLICATION_SID = context.TWIML_APP_SID;
  const API_KEY = context.SHARED_ACCOUNT_KEY;
  const API_SECRET = context.SHARED_ACCOUNT_SECRET;

  const AccessToken = Twilio.jwt.AccessToken;
  const VoiceGrant = AccessToken.VoiceGrant;

  const accessToken = new AccessToken(ACCOUNT_SID, API_KEY, API_SECRET);
  accessToken.identity = IDENTITY;
  const grant = new VoiceGrant({
    outgoingApplicationSid: TWIML_APPLICATION_SID,
    incomingAllow: true
  });
  accessToken.addGrant(grant);

  const response = new Twilio.Response();

  // Uncomment these lines for CORS support
  response.appendHeader('Access-Control-Allow-Origin', '*');
  response.appendHeader('Access-Control-Allow-Methods', 'GET');
  response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');

  response.appendHeader("Content-Type", "application/json");
  response.setBody({
    identity: IDENTITY,
    token: accessToken.toJwt()
  });
  callback(null, response);
};

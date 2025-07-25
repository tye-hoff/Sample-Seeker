import { checkResponse } from "./FreeSoundApi.js";
import { clientId, baseURL } from "./constants.js";

function exchangeCodeForToken() {
  return fetch(`${baseURL}/oauth2/access_token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "authorization_code",
      code: authCode,
    }),
  }).then(checkResponse);

  // tokenData.access_token is what you'll use for API calls
}

export { exchangeCodeForToken };

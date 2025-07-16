import { checkResponse } from "./FreeSoundApi.js";

function registerUser({ name, avatar, email, password }) {
  return fetch(`${baseUrl}/oauth2/authorize/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(checkResponse);
}

export { registerUser };

export function authChanger(auth) {
  return { type: "CHANGE_AUTHENTICATION_STATUS", payload: !auth };
}

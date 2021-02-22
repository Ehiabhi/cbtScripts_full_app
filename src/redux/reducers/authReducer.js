import init from "./initState";

export default function authReducer(state = init.isAuthenticated, action) {
  switch (action.type) {
    case "CHANGE_AUTHENTICATION_STATUS":
      return action.payload;
    default:
      return state;
  }
}

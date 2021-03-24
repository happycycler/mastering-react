import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/users";

export function reqister(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

// export function getUsers() {
//   return http.get(apiEndpoint);
// }

// export function getUser(id) {
//   return http.get(movieUrl(id));
// }

// export function deleteUser(id) {
//   return http.delete(movieUrl(id));
// }

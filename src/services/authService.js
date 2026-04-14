import { post } from "./request";

export async function loginUser({ email, password }) {
  return post("/login", {
    email,
    password,
  });
}

export async function signupUser({ email, password }) {
  return post("/signup", {
    email,
    password,
  });
}

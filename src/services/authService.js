import { post } from "./request";

export async function loginUser({ email, password }) {
  return post("/api/login", { email, password });
}

export async function signupUser({ email, password }) {
  return post("/api/signup", { email, password });
}

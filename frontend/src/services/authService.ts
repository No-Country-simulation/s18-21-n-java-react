const baseUrl = "http://localhost:8080/api/auth/login";

export async function login() {
  await fetch(baseUrl);
}
import { buildRequest } from "@/lib/helpers/buildRequests";
const baseUrl = "http://localhost:8080/api/v1/auth/login";

export async function signup(signupFields: object) {
  try {
    const res = await fetch(baseUrl, buildRequest(signupFields));
    if (!res.ok) throw new Error(`Response not ok! ${res.status}: ${res.statusText}`);
    const data = res.json();
    return data;
  } catch(err: unknown) {
    if (err instanceof Error) console.log(err.message);
    else console.log(err);
  }
}

export async function verifyEmail(verificationInputs: object) {
    try {
    const res = await fetch(baseUrl, buildRequest(verificationInputs));
    if (!res.ok) throw new Error(`Response not ok! ${res.status}: ${res.statusText}`);
    const data = res.json();
    return data;
  } catch(err: unknown) {
    if (err instanceof Error) console.log(err.message);
    else console.log(err);
  }
}

export async function login(loginFields: object) {
    try {
      const res = await fetch(baseUrl, buildRequest(loginFields));
      if (!res.ok)
        throw new Error(`Response not ok! ${res.status}: ${res.statusText}`);
      const data = res.json();
      return data;
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err.message);
      else console.log(err);
    }
}

export async function logout() {
  console.log("logout");
}
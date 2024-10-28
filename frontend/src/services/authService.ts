import { buildUserSignupRequest } from "@/lib/helpers/buildRequests";
const baseUrl = "https://deploy-smart-store.onrender.com/api/v1";

export async function signup(signupFields: object) {
  try {
    const res = await fetch(`${baseUrl}/user/register`, buildUserSignupRequest(signupFields));
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
    const res = await fetch(
      `${baseUrl}/user/verifyCode`,
      // buildRequest(verificationInputs)
    );
    console.log(verificationInputs);
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
      const res = await fetch(
        `${baseUrl}/auth/login`,
        // buildRequest(loginFields)
      );
      console.log(loginFields);
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
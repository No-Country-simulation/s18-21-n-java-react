export function buildRequest(formInputs: object): RequestInit {
  return {
    method: "POST",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formInputs),
  };
}
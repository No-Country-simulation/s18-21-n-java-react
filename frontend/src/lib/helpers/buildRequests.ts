export function buildUserSignupRequest(formInputs: object): RequestInit {
  const formData = new FormData();
  Object.entries(formInputs).forEach(field => formData.append(field[0], field[1]));
  return {
    method: "POST",
    headers: {
      "content-type": "multipart/form-data",
    },
    body: formData,
  };
}
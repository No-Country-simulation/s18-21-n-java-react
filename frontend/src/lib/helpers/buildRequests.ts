import { Order } from "../types/orderInterface";

export function buildUserSignupReq(formInputs: object): RequestInit {
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

export function buildUserLoginReq(formInputs: object): RequestInit {
  return {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formInputs),
  };
}

export function buildOrderPostReq(order: Order, token: string) {
  return {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(order),
  };
}
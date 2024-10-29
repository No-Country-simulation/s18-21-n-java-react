import { buildOrderPostReq } from "@/lib/helpers/buildRequests";
import { cartMapper, CartItem } from "@/lib/helpers/cartMapper";

const baseUrl = "https://deploy-smart-store.onrender.com/api/v1";

export async function postOrder(items: CartItem[]) {
  try {
    const order = cartMapper(items);
    const {token} = JSON.parse(localStorage.getItem("user") ?? '{"id": -1, "jwtToken": ""}');
    if (!token) throw new Error("¡Usuario no registrado!");
    const res = await fetch(`${baseUrl}/order`, buildOrderPostReq(order, token));
    if (!res.ok) throw new Error(`Response not ok! ${res.status}: ${res.statusText}`);
    const data = res.json();
    return data;
  } catch(err: unknown) {
      if (err instanceof Error) console.log(err.message);
      else console.log(err);
  }
}
import { GetAllProducts } from "@/lib/types/getAllProductsInterface";

const baseUrl = "https://deploy-smart-store.onrender.com/api/v1/products";

export const creatProduct = async (data: FormData, token: string) => {
  try {
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });
    if (!res.status) {
      throw new Error("Error en la petición: " + res.status);
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export async function getAllProducts(page: string = "0"): Promise<GetAllProducts> {
  const query = new URL(baseUrl);
  query.searchParams.append("page", page);
  const res = await fetch(query);
  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }
  const data = await res.json();
  return data;
};

export const updateProduct = async (
  data: FormData,
  id: string,
  token: string
) => {
  try {
    const res = await fetch(baseUrl + `/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!res.status) {
      throw new Error("Error en la petición: " + res.status);
    } else {
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id: string) => {
  try {
    const res = await fetch(baseUrl + `/${id}`);
    if (!res.status) {
      throw new Error("Error en la petición: " + res.status);
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductById = async (id: string) => {
  try {
    const res = await fetch(baseUrl + `/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    if (!res.status) {
      throw new Error("Error en la petición: " + res.status);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

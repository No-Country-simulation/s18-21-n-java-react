const URL = "https://deploy-smart-store.onrender.com/api/v1/products";

export const creatProduct = async (data: FormData, token: string) => {
  try {
    const res = await fetch(URL, {
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

export const getAllProducts = async () => {
  try {
    const res = await fetch(URL + "?page=2");
    if (!res.status) {
      throw new Error("Error en la petición: " + res.status);
    }
    const data = await res.json();
    return data.dataList;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (data: FormData, id: string, token: string) => {
  try {
    const res = await fetch(URL + `/${id}`, {
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
    const res = await fetch(URL + `/${id}`);
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
    const res = await fetch(URL + `/${id}`, {
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

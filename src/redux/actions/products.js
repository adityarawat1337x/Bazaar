import { commerce } from "../../lib/commerce";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await commerce.products.list({ limit: 45 });
    console.log("aa gya", data);
    // const res = await axios.get("https://fakestoreapi.com/products");
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

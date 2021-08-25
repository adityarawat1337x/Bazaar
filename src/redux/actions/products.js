import { commerce } from "../../lib/commerce";

export const getProducts = () => async (dispatch) => {
  commerce.products
    .list({ limit: 100 })
    .then((res) => {
      // res.setHeader("Access-Control-Allow-Origin", "*");
      // res.setHeader("Access-Control-Allow-Credentials", "true");
      // res.setHeader("Access-Control-Max-Age", "1800");
      // res.setHeader("Access-Control-Allow-Headers", "content-type");
      // res.setHeader(
      //   "Access-Control-Allow-Methods",
      //   "PUT, POST, GET, DELETE, PATCH, OPTIONS"
      // );
      console.log("aa gya", res);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
      // res.setHeader("Content-Type", "application/json;charset=utf-8"); // Opening this comment will cause problems
    })
    .catch((err) => {
      console.log(err.message);
    });
};

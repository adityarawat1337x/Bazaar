import { commerce, token } from "../../lib/commerce"

export const getProducts = () => async (dispatch) => {
  const url = new URL("https://api.chec.io/v1/products")
  let params = {
    limit: "100",
  }
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  )

  let headers = {
    "X-Authorization": token,
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "1800",
    "Access-Control-Allow-Headers": "content-type",
  }

  fetch(url, {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((res) => {
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      })
    })
    .catch((err) => {
      console.log(err.message)
    })

  // commerce.products
  //   .list({ limit: 100 })
  //   .then((res) => {
  // // res.setHeader("Access-Control-Allow-Origin", "*");
  // // res.setHeader("Access-Control-Allow-Credentials", "true");
  // // res.setHeader("Access-Control-Max-Age", "1800");
  // // res.setHeader("Access-Control-Allow-Headers", "content-type");
  // // res.setHeader(
  // //   "Access-Control-Allow-Methods",
  // //   "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  // // );
  //   console.log("aa gya", res);
  //   dispatch({
  //     type: "GET_PRODUCTS",
  //     payload: res.data,
  //   });
  //   // res.setHeader("Content-Type", "application/json;charset=utf-8"); // Opening this comment will cause problems
  // })
  // .catch((err) => {
  //   console.log(err.message);
  // });
}

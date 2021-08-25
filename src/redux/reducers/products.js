const initialState = [];

function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_PRODUCTS":
      return payload;

    default:
      return state;
  }
}

export default productReducer;

const initialState = []
let index
function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_TO_CART":
      index = state.findIndex((element) => element.id === payload.id)
      if (index < 0) return [...state, payload]
      else {
        state[index].quantity++
        return [...state]
      }
    case "INCREMENT":
      index = state.findIndex((element) => element.id === payload)
      state[index].quantity++
      return [...state]

    case "DECREMENT":
      index = state.findIndex((element) => element.id === payload)
      state[index].quantity--
      return [...state]

    case "REMOVE_FROM_CART":
      state = state.filter((element) => element.id !== payload)
      return [...state]

    case "EMPTY_CART":
      state = []
      return [...state]

    default:
      return state
  }
}

export default cartReducer

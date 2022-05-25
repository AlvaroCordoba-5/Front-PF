import { GET_BY_SEARCH } from "../actions/types";

const initialState = {
  allBook: [],
  books: [],
};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_BY_SEARCH:
      return {
        ...state,
        books: payload,
      };
  }
}

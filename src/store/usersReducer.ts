import {
  defaultState,
  GET_USERS_ERROR,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "../types/types";

const initialState: defaultState = {
  users: [],
  isLoading: false,
  isError: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state, isLoading: true, isError: null };
    case GET_USERS_SUCCESS:
      return { ...state, isLoading: false, users: action.payload };
    case GET_USERS_ERROR:
      return { ...state, isLoading: false, isError: action.payload };
    default:
      return state;
  }
};

export const request = () => ({ type: GET_USERS_REQUEST });
export const success = (payload: any) => ({ type: GET_USERS_SUCCESS, payload });
export const errors = (payload: string) => ({ type: GET_USERS_ERROR, payload });
export default reducer;

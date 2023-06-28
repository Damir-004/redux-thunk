import axios from "axios";
import { Dispatch } from "redux";
import { success, errors, request } from "./usersReducer";

export const findings = (str: string): any => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(request());
      const response = await axios.get(
        `https://api.github.com/users/${str}/repos`
      );
      const data = response.data;
      dispatch(success(data));
    } catch (error: any) {
      dispatch(errors(error.message));
    }
  };
};

export interface defaultState {
  users: any;
  isLoading: boolean;
  isError: string | null;
}
export interface defaultCounter {
  counter: number;
}
export interface UsersAndCounter {
  users: defaultState;
  counter: defaultCounter;
}

export const GET_USERS_REQUEST = "getUsersRequest";
export const GET_USERS_SUCCESS = "getUsersSuccess";
export const GET_USERS_ERROR = "getUsersError";
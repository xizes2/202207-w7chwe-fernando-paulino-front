import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisteredUser } from "./model/User";

const usersInitialState: RegisteredUser[] = [
  {
    id: "",
    userName: "",
    userEmail: "",
    token: "",
    image: "",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    loadUsers: (previousUsers, action: PayloadAction<RegisteredUser[]>) => [
      ...action.payload,
    ],
  },
});

export const userReducer = usersSlice.reducer;

export const { loadUsers: loadUsersActionCreator } = usersSlice.actions;

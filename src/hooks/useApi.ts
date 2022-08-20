import { PayloadAction } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { RegisteredUser } from "../app/store/feature/user/model/User";
import { loadUsersActionCreator } from "../app/store/feature/user/userSlicer";
import { useAppSelector } from "../app/store/hooks";

const useApi = () => {
  const url = process.env.REACT_APP_APIURL as string;

  const users = useAppSelector(({ user }) => user);

  const dispatch = useDispatch();

  const getUsers = useCallback(async () => {
    const response = await fetch(`${url}/users`);
    const users = (await response.json()) as RegisteredUser[];

    dispatch<PayloadAction<RegisteredUser[]>>(loadUsersActionCreator(users));
  }, [dispatch, url]);

  return { users, getUsers };
};

export default useApi;

import { useEffect } from "react";
import { RegisteredUser } from "../../app/store/feature/user/model/User";
import useApi from "../../hooks/useApi";

const UsersList = (): JSX.Element => {
  const { users, getUsers } = useApi();

  useEffect(() => {
    getUsers();
  });

  return (
    <>
      <div className="users-list-container">
        <h2 className="users-list__title">Users List</h2>
        <ul className="users-list__list">
          {users.map((user: RegisteredUser) => user)}
        </ul>
      </div>
    </>
  );
};

export default UsersList;

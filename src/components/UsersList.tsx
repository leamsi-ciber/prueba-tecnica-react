import React from "react";
import { SortBy, type User } from "../types.d";

interface Props {
  changeSorting: (sort: SortBy) => void;
  deleteUsers: (email: string) => void;
  showColors: boolean;
  users: User[];
}
const UserLists = ({ changeSorting, deleteUsers, users, showColors }: Props) => {
  return (
    <table width="100%" className={showColors ? 'table--showColors': ''}>
      <thead>
        <tr>
          <th>Photo</th>
          <th className="pointer" onClick={() => changeSorting(SortBy.NAME)}>Name</th>
          <th className="pointer" onClick={() => changeSorting(SortBy.LAST)}>Last Name</th>
          <th className="pointer" onClick={() => changeSorting(SortBy.COUNTRY)}>Country</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
       
          return (
            <tr key={user.email} >
              <td>
                <img src={user.picture.medium} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button onClick={() => deleteUsers(user.email)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserLists;

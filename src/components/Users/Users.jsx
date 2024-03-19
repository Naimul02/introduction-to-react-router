import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";
const Users = () => {
  // useEffect dile tomar jokhon component a asteche tar por a giye data load er cesta kore ebong er pore ase. ar tumi jodi useLoaderData use koro tahole se route a asar age data ta k load kore niye ase
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2>Our Users : {users.length}</h2>
      <p>Fantastic and vodro users</p>
      <div className="users">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;

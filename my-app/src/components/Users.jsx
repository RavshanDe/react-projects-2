import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    })();
  });
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
      }}
    >
      {users.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Users;

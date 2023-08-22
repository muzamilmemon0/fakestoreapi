import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import UserCard from "./UserCard";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log("Error fetching users: ", error));
  }, []);

  return (
    <>
      <Navbar />
      <h2 className="text-2xl font-bold mb-3 text-center">Users</h2>
      <div className="users">
        <div className="user-cards grid grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Users;

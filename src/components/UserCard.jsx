function UserCard({ user }) {
  return (
    <div className="user-card border-sm flex items-center md:flex-col">
      <h2 className="text-xl font-bold capitalize">
        {user.name.firstname} &nbsp;
        {user.name.lastname}
      </h2>
      <p>
        <span className="font-bold">Email:</span> {user.email}
      </p>
      <p>
        <span className="font-bold">Username: </span>
        {user.username}
      </p>
      <p>
        <span className="font-bold">Phone:</span> {user.phone}
      </p>
      <p>
        <span className="font-bold">Address: </span>
        {user.address.street}, {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  );
}

export default UserCard;

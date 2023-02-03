import React, { useEffect, useState } from 'react';
import AllUser from './AllUser';

const Users = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data=> setUser(data))
    },[]);
    console.log(users);
    
    return (
      <div className="m-5">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
              {users.map((user) => (
                <AllUser key={user.id} user={user}></AllUser>
              ))}
          </table>
        </div>
      </div>
    );
};

export default Users;
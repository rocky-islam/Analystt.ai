import React from 'react';
import { Link } from 'react-router-dom';

const AllUser = ({user, i}) => {
    const {id, name, email, phone, address} = user;
    console.log(address.city);
    
    return (
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full my-12">
            <thead>
              <tr>
                <th></th>
                <th>Contact</th>
                <th>City</th>
                <th>state</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="">
                      <p>{id}</p>
                    </div>
                    <div>
                      <div className="font-bold">{name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {phone}
                  <br />
                  <span className="badge badge-ghost badge-sm">{email}</span>
                </td>
                <td>{address.city}</td>
                <td>{address.street}</td>
                <th>
                    <Link className="btn btn-error btn-xs" to={`/user/${id}`}>
                      View Details
                    </Link>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllUser;
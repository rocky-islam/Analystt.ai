import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleUser = () => {
    const user = useLoaderData();
    console.log(user);
    const {name, email, phone, address, username, company} = user;
    
    return (
      <div>
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
                    <Link className="btn btn-error btn-xs" to="/">
                      Back
                    </Link>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="m-16">
            <div className="my-12">
              <p className="font-semibold text-2xl">Description</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                ipsa illo facere quod enim magnam officiis saepe necessitatibus
                aperiam mollitia, ut cumque incidunt. Nobis, consectetur dolor.
                Quia, soluta? Dolore veritatis labore officiis mollitia,
                corrupti eveniet assumenda neque voluptatibus odit ut?
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3">
                <div>
                  <p className='text-xl font-semibold mb-4'>Contact person</p>
                  <p>{name}</p>
                  <p className='text-xl font-semibold mb-4'>Designation</p>
                  <p>{username}</p>
                  <p className='text-xl font-semibold mb-4'>Emails</p>
                  <p>{email}</p>
                  <p className='text-xl font-semibold mb-4'>Phone</p>
                  <p>{phone}</p>
                </div>
                <div>
                  <p className='text-xl font-semibold mb-4'>Address</p>
                  <p>{address.suite} {' '}{'-'}{' '} {address.zipcode}</p>
                  <p className='text-xl font-semibold mb-4'>City</p>
                  <p>{address.city}</p>
                  <p className='text-xl font-semibold mb-4'>State</p>
                  <p>{address.street}</p>
                  <p className='text-xl font-semibold mb-4'>Company</p>
                  <p>{company.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleUser;
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const UserManagement = () => {
  const navigate=useNavigate();
  const [users, Setusers] = useState([
    {
      id: "",
      name: "",
      email: "",
      password: "",
    }
  ]);
  const handleEdit=()=>{

  }
   const handleDelete = (id) => {
    Setusers(users.filter((user) => user.id !== id));
  };
  const handleAdd=()=>{
      navigate("/userform")
  }

  return (
    <div className="usermanagement">
      <div className="text_nav">
        <div className="list_heading">List</div>
        <div className="search_add_fields">
          {/* <div className="input_serach">
            <input type="text" placeholder="Search" />
          </div> */}
          <div className="Add_button">
           
              <button onClick={handleAdd}>Add</button>
            
          </div>
        </div>
      </div>
      <div className="user_main">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th> Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((e) => {
              return (
                <tr key={e}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.password}</td>
                  <td><button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button></td>
                </tr> 
              );
            })}
            
          </tbody>
        </table>
      </div>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default UserManagement;

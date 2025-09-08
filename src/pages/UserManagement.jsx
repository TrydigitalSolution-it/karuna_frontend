import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const UserManagement = () => {
  return (
    <div className="usermanagement">
      <div className="text_nav">
        <div className="list_heading">List</div>
        <div className="search_add_fields">
          {/* <div className="input_serach">
            <input type="text" placeholder="Search" />
          </div> */}
          <div className="Add_button">
           <Link to='userform'><button>Add</button></Link>
              {/* <button></button> */}
           
          </div>
        </div>
      </div>
      <div className="user_main">
        <thead>
          <tr>
            <th> Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
      </div>
      <main><Outlet/></main>
    </div>
  );
};

export default UserManagement;

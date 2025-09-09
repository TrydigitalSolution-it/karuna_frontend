import React, { useMemo, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import TextInput from "../component/TextInput";
import Button from "../component/Button";

const UserManagement = () => {
  const navigate = useNavigate();
  const columns = [
    { name: "Id", selector: (row) => row.id, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Password", selector: (row) => row.password, sortable: true },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      ),
      button: true,
    },
  ];
  const [data, Setdata] = useState([
    {
      id: 1,
      name: "karuna",
      email: "karunamehra032@gmail.com",
      password: "1234@dfgh",
    },
    {
      id: 2,
      name: "kunal",
      email: "karunamehra032@gmail.com",
      password: "1234@dfgh",
    },
  ]);
  const handleEdit = () => {};
  const handleDelete = (id) => {
    const filterdata= data.filter((user)=>{user.id==id})
    console.log(filterdata);
    
    Setdata(filterdata);
  };
  const handleAdd = () => {
    navigate("/userform");
  };
  const handlechange = (e) => {
    const newdata = data.filter((row) => {
      return row.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    Setdata(newdata);
  };
  return (
    <div className="usermanagementMain">
    <div className="usermanagement">
      <div className="search-input">
        <h3>UserData</h3>
        <div className="search-input-data">
          <TextInput
            type="text"
            placeholder="Search"
            onChange={handlechange}
            className="table-search-input"
            inputWrapper="inputText"
          />

          <Button
            className="add-Data-Button"
            onClick={handleAdd}
            text="Add"
            buttonWrapper="add-button"
          />
        </div>
      </div>
      {/* <div> <input type="text" placeholder="search" /></div> */}
      <DataTable
        columns={columns}
        data={data}
        
        fixedHeader
        pagination
      ></DataTable>
    </div>
    </div>
  );
};

export default UserManagement;

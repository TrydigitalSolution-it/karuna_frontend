import React, { useMemo, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import TextInput from "../component/TextInput";
import Button from "../component/Button";

const UserManagement = () => {
  const initialUsers=[{
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
    },];

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
          <button onClick={()=>handleEdit(row.id)}>Edit</button>
          <button onClick={()=>handleDelete(row.id)}>Delete</button>
        </div>
      ),
      button: true,
    },
  ];
  const [data, Setdata] = useState(initialUsers);
  const [originalData,setoriginalData]=useState(initialUsers);
  
  const handleEdit = () => {
    navigate("/userform");
  };
  const handleDelete = (id) => {
    const filteredData= data.filter((user)=>user.id !== id)
    console.log(filteredData);
    
    Setdata(filteredData);
  };
  const handleAdd = () => {
    navigate("/userform");
  };
  const handlechange = (e) => {
    const value= e.target.value.toLowerCase();
    if(!value){
    Setdata(originalData);
  } else {
    const filtered=originalData.filter((row)=>row.name.toLowerCase().includes(value));
  Setdata(filtered);
  }}
  return (
    <div className="usermanagementMain">
    <div className="usermanagement">
      
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

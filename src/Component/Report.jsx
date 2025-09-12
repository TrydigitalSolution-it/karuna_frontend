import React from "react";
import DataTable from "react-data-table-component";
import { useState } from "react";
import Button from "./Button";
import DataTableHeader from "./DataTableHeader";
import TextInput from "./TextInput";

const initialUsers = [
  {
    id: 1,
    Name: "Karuna",
    Email: "Karunamehra032@gmail.com",
    Password: "K@runa123",
  },
  {
    id: 2,
    Name: "Kanika",
    Email: "Kanikamehra032@gmail.com",
    Password: "K@runa123",
  },
  {
    id: 3,
    Name: "Raghav",
    Email: "Raghav032@gmail.com",
    Password: "K@runa123",
  },
  {
    id: 4,
    Name: "Vinay",
    Email: "Vinay032@gmail.com",
    Password: "K@runa123",
  },
];

const Report = () => {
  const [data, Setdata] = useState(initialUsers);
  const [isOpen, setIsOpen] = useState(false);
  
  const [inputs, setInputs] = useState({});

  const handleEdit = (row) => {
    setIsOpen(true);
    setInputs({ name: row.Name, email: row.Email, id: row.id });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (inputs.id == "") {
      let id = data.length + 1;
     Setdata((pre)=>
       ([...pre,{Name:inputs.name,Email:inputs.email,id:id,Password:inputs.password}])
     )
     setInputs({ name: "", email: "" });
      setIsOpen(false);

    } else {
      Setdata((prev) =>
        prev.map((item) =>
          item.id === inputs.id
            ? { ...item, Name: inputs.name, Email: inputs.email }
            : item
        )
      );
      setInputs({ name: "", email: "" });
      setIsOpen(false);
    }
  };

  const handleChange = (event) => {
    // console.log(event.target.value)
    const { name, value } = event.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDelete = (name) => {
    Setdata((pre) => {
      return pre.filter((data) => {
        return data.Name !== name;
      });
    });
  };

  const columns = [
    { name: "Name", selector: (row) => row.Name, sortable: true },
    { name: "Email", selector: (row) => row.Email, sortable: true },
    { name: "Password", selector: (row) => row.Password, sortable: true },
    {
      name: "Action",
      cell: (row) => (
        <div className="ActionContainer">
          <Button
            text="Edit"
            className="add-Data-Button"
            onClick={() => handleEdit(row)}
          />
          <Button
            text="Delete"
            className="add-Data-Button"
            onClick={() => handleDelete(row.Name)}
          />
        </div>
      ),
      button: true,
    },
  ];
  console.log(inputs);
  return (
    <div className="reportContainer ">
      <div className="reports">
        <div className="articlesHead"></div>
        <DataTableHeader setInputs={setInputs} setIsOpen={setIsOpen} />

        <DataTable
          columns={columns}
          data={data}
          pagination
          className="dataTable"
        ></DataTable>
      </div>
      {isOpen && (
        <div className="modal">
          <h4 className="edit-h2">Edit Details</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={inputs.name}
              placeholder="Name"
              className="input"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={inputs.email}
              placeholder="Email"
              className="input"
            />
          {!inputs.id && (
           <div>
             <label htmlFor="password">Password:</label>
             <input
              type="text"
              name="password"
              onChange={handleChange}
              value={inputs.password}
              placeholder="Password"
              className="input"
            />
           </div>
            
          )

          }  

            <div className="buttonContainer">
              <button className="buttons">Submit</button>
              <button
                className="buttons"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Report;

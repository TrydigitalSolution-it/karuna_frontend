import React from 'react'
import DataTable from 'react-data-table-component'
import { useState } from 'react';
import Button from './Button';
const initialUsers=[{
     
      Article: "Article1",
      View: "10k",
      Comment: 300,
    },
    {
     
      Article: "Article2",         
      View: "20k",
      Comment: 210,
    },
{
     
      Article: "Article2",         
      View: "20k",
      Comment: 210,
    },{
     
      Article: "Article2",         
      View: "20k",
      Comment: 210,
    },{
     
      Article: "Article2",         
      View: "20k",
      Comment: 210,
    }];
const Report = () => {
    const [data, Setdata] = useState(initialUsers);
      const [originalData,setoriginalData]=useState(initialUsers);
     

    const columns = [
    { name: "Article", selector: (row) => row.Article, sortable: true },
    { name: "View", selector: (row) => row.View, sortable: true },
    { name: "Comment", selector: (row) => row.Comment, sortable: true },
   {
      name: "Status",
      cell: (row) => (
       
          <button onClick={()=>handleEdit(row.id)}>Published</button>
          
        
      ),
      button: true,
    },
   
  ];
  return (
    <div className='reportContainer'>
       <div className='reports'>
        <div className='articlesHead'>
          <div className='reportText'>Recent Articles</div> 
          <div>  <Button text='View All' className='add-Data-Button1'/></div></div>

        <DataTable
        columns={columns}
        data={data}
        
        fixedHeader
      pagination
       className='dataTable'></DataTable>
       </div>
    </div>
  )
}

export default Report

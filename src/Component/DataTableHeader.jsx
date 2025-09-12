import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const DataTableHeader = ({setIsOpen,setInputs}) => {
    const navigate= useNavigate();
    const handleclick=()=>{
        setInputs({name:"",email:"",id:""})
        setIsOpen(true);
    }
  return (
    <div className='headerContainer'>
       <header>
            <div className='headerText'>Details</div>
        <Button text='Add' className='add-Data-Button' onClick={handleclick}/>
       </header>
    </div>
  )
}

export default DataTableHeader;

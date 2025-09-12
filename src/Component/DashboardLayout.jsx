import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Icon from "../assets/Icon.svg";
import TextInput from './TextInput';
import Button from './Button';
import Header from './Header';
const DashboardLayout = () => {
   const[showDashboard,setshowDashboard]=useState(false)
  //  const handlechange = (e) => {
  //   const value= e.target.value.toLowerCase();
  //   if(!value){
  //   Setdata(originalData);
  // } else {
  //   const filtered=originalData.filter((row)=>row.name.toLowerCase().includes(value));
  // Setdata(filtered);
  // }}
   
  return (
    <div className='dashboard_layout'>
      <Header setshowDashboard={setshowDashboard} showDashboard={showDashboard} />
         <div className='Layout_main'>
          
          {/* <div className="search-input-data">
                
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
                  </div> */}
                
        {/* <div className='fa-solid-bar-icon'> <i class="fa-solid fa-bars" > </i></div> */}
        {showDashboard &&(
            <div className='Navbar'>
             {/* <div className='nav_logo_text'>  <div className="nav_logo"><img src={Icon} alt="" /></div>
        <div className="Nav_logo_text">Admin Panel</div></div> */}
          
             <nav className='Navbar_nav'>
        <ul className='nav_ul'>
           <div className='nav_li'><li className='nav_ul_li'><NavLink to="/dashboard/usermanagement">User management</NavLink> </li></div> 
           <div className='nav_li'> <li className='nav_ul_li'> <NavLink to="/dashboard/Fitness" >Change fitness goal</NavLink> </li></div> 
            <div className='nav_li'><li className='nav_ul_li'> <NavLink to="/dashboard/motivation">Change Motivation Tone</NavLink></li></div> 
           
        </ul>
       </nav>
       </div>
        )}
      
       <main>
        <Outlet/>
       </main>
        </div>
      
      </div>
   
  )
}

export default DashboardLayout;

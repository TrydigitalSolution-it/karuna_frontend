import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Icon from "../assets/Icon.svg";
const DashboardLayout = () => {
    
  return (
         <div className='Layout_main'>
        
        <div className='Navbar'>
            <div className='nav_logo_text'>  <div className="nav_logo"><img src={Icon} alt="" /></div>
        <div className="Nav_logo_text">Admin Panel</div></div>
          
             <nav className='Navbar_nav'>
        <ul className='nav_ul'>
           <div className='nav_li'><li className='nav_ul_li'><NavLink to="/dashboard/usermanagement">User management</NavLink> </li></div> 
           <div className='nav_li'> <li className='nav_ul_li'> <NavLink to="/dashboard/Fitness" >Change fitness goal</NavLink> </li></div> 
            <div className='nav_li'><li className='nav_ul_li'> <NavLink to="/dashboard/motivation">Change Motivation Tone</NavLink></li></div> 
           
        </ul>
       </nav>
       </div>
       <main>
        <Outlet/>
       </main>
        </div>
      
      
    
  )
}

export default DashboardLayout;

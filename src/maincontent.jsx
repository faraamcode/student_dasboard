import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FiSettings, FiSearch } from 'react-icons/fi';
import { GrNotification } from 'react-icons/gr';
import { useGlobalContext } from './context';
const Content = () => {

  
  return (
    <div className="main-content">
       <div className="profile-container">
           <div className="profile-details">
             <div className="user-image">
                 <img src="chair.jpeg" alt=""/>
             </div>
             <div className="user-profile">
              <h4>Emmanuel Oluwatundun </h4>
              <h5>Year 12</h5>
              <div className="online-container"><div className="online"></div><h6>online status</h6></div>
              <h2>Welcome to Roemichs International Schools</h2>
              <h3>Excellence in all things...</h3>
             </div>
           </div>
           <div className="other-user-details">
            
           </div>
       </div>
       <div className="other-details"></div>
       <div className="footer"></div>
    </div>
  );
};

export default Content;
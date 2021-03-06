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
            <div className="simple-detail">
                <h5>Current session</h5>
                <p>2020/2021</p>
            </div>
            <div className="simple-detail">
                <h5>term</h5>
                <p>First</p>
            </div>
            <div className="simple-detail">
                <h5>Gender</h5>
                <p>Male</p>
            </div>
            <div className="simple-detail">
                <h5>Class Section</h5>
                <p>Purple</p>
            </div>
            <div className="simple-detail">
                <h5>Admission Type</h5>
                <p>Border</p>
            </div>
            <div className="simple-detail">
                <h5>Sport House</h5>
                <p>King</p>
            </div>
           </div>
       </div>
       <div className="other-details"></div>
       <div className="footer"></div>
    </div>
  );
};

export default Content;
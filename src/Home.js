import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FiSettings, FiSearch } from 'react-icons/fi';
import { GrNotification } from 'react-icons/gr';
import { useGlobalContext } from './context';
const Home = () => {
  const result = async () => {
    const data = await fetch('https://api.github.com/users')
    const response = await data.json()
    console.log(response);
  }
  const { openSidebar, openModal } = useGlobalContext();
result()
  
  return (
    <main className="header">
      <div className="header-wrapper">

      <div className="logo-container">
        <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
        </button>
        <img src="logo.png" className = ""/>
        <h5>roemichs</h5>
      </div>
      <div className="search-container">
       <FiSearch className="search-btn"/>
       <input type="text" className ="search"/>
      </div>
      <div className="other-container">
       <FiSettings />
       <GrNotification/>
      </div>
      </div>
      
    </main>
  );
};

export default Home;

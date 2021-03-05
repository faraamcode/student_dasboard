import React from 'react';
import { FaBars } from 'react-icons/fa';
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
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
    </main>
  );
};

export default Home;

import React from 'react';
import logo from './logo.svg';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import Content from './maincontent.jsx'
import ResultForm from './result-form.jsx'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className="content">
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
    <ResultForm/>
{/* <Content/> */}
    </div>
  );
};

export default Sidebar;

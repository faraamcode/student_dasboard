import React from 'react';
import logo from '../logo.svg';
import { useGlobalContext } from '../context.js';
import { FaTimes } from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io'
import Result from './result'
import { social, Teacherlinks } from '../data';
import {Link, Route, Switch} from "react-router-dom"

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className="content">
      



    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <ul className='links teacher-link'>
        {Teacherlinks.map((link) => {
          const { id, url, text, icon, submenu } = link;
          if(submenu.length == 0){
            return (
                <Link >
                <li key={id} >
                 
                    {icon}
                    {text}
             
                </li>
                </Link>
              );
          }
          return (
            <Link >
            <li key={id} >
             
                {icon}
                {text}
                <IoIosArrowDown className="arrow"/>
            </li>
            <div>
             <ul className="submenu show"> 
                 {submenu.map((item, index)=> {
                     return <Link to={item.url}><li>{item.text}</li></Link>
                    })}
             </ul>
             </div>
            </Link>
          );
        })}
      </ul>
    </aside>
    


<Result/>

  
    </div>
  );
};

export default Sidebar;

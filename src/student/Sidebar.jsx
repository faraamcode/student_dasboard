import React from 'react';
import logo from '../logo.svg';
import { useGlobalContext } from '../context.js';
import { FaTimes } from 'react-icons/fa';
import { social, links } from '../data';
import Content from './maincontent.jsx'
import ResultForm from './result-form.jsx'
import Bill from './bill.jsx'
import Payment from './payment.jsx'
import {Link, Route, Switch} from "react-router-dom"

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className="content">
      



    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <ul className='links teacher-link'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <Link to={url}>
            <li key={id}>
             
                {icon}
                {text}
         
            </li>
            </Link>
          );
        })}
      </ul>
    </aside>
    


    <Route path="/" exact>

   <Content/>
     </Route>
    <Route path="/bill">
    <Bill/>

    </Route>
    <Route path="/result" >
    <ResultForm/>

    </Route>
    <Route path="/payment" >
    <Payment/>

    </Route>

  
    </div>
  );
};

export default Sidebar;

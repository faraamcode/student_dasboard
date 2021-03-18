import React from 'react';
import {useEffect, useState} from 'react';
import logo from '../logo.svg';
import { useGlobalContext } from '../context.js';
import { FaTimes } from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io'
import Result from './result'
import Subjectresult from './resultsubject'
import Classresult from './resultclass.jsx'
import MidtermResult from './Midtermresult'
import { social, Adminlinks } from '../data';
import {Link, Route, Switch} from "react-router-dom"
import Psycomotor from './psycomotor';
import Affective from './affective';
import Attendance from './Attendance';
import Midtermrecord from './Midtermrecord';
import Termrecord from './termrecord';
import Termcomment from './termcomment'
import Midtermcomment from './midtermcomment';
import UpdateMidtermRecord from './updatemidtermrecord'
import UpdatetermRecord from './updatetermrecord'
import {AdminContext} from '../context/context'


const Sidebar = () => {
  const [openSubmenu, setOpenSubmenu] = useState("")
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const submenufunction = (menu)=>{
     setOpenSubmenu(previousState => previousState === menu ? " " : menu)
    
  }
  return (
    <div className="content">
      



    <aside className={`${isSidebarOpen ? 'sidebar admin-sidebar show-sidebar' : 'sidebar admin-sidebar'}`}>
      <ul className='links teacher-link'>
        {Adminlinks.map((link) => {
          const { id, url, text, icon, submenu } = link;
          if(submenu.length == 0){
            return (
                <Link to={url} >
                <li key={id} >
                 
                    {icon}
                    {text}
             
                </li>
                </Link>
              );
          }
          return (
            <Link >
            <li key={id} onClick={()=> submenufunction(text)} >
             
                {icon}
                {text}
                
            </li>
            <div>
             <ul className={`${openSubmenu === text ? "submenu show": "submenu"}`}> 
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
    


<Route path="/result/student" exact>
<Result/>
  </Route>
 <Route path="/result/class">
 <Classresult/>

 </Route>
 <Route path="/result/subject">
 <Subjectresult/>

 </Route>
 <Route path="/result/midterm">
 <MidtermResult/>

 </Route>
 <Route path="/psycomotor">
 <Psycomotor/>

 </Route>
 <Route path="/affective">
 <Affective/>

 </Route>
 <Route path="/attendance">
 <Attendance/>

 </Route>
 <Route path="/record/midterm">
 <Midtermrecord/>

 </Route>
 <Route path="/record/term">
 <Termrecord/>

 </Route>
 <Route path="/comment/term" >
    <Termcomment/>

    </Route>
    <Route path="/comment/midterm" >
    <Midtermcomment/>

    </Route>
<Route path="/record/update/midterm">
 <UpdateMidtermRecord/>

 </Route>
 <Route path="/record/update/term">
 <UpdatetermRecord/>
 </Route>
  
    </div>
  );
};

export default Sidebar;

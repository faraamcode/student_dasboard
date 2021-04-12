import React from 'react';
import logo from '../logo.svg';
import { useGlobalContext } from '../context.js';
import { FaTimes } from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io'
import Result from './result'
import Subjectresult from './resultsubject'
import Classresult from './resultclass.jsx'
import MidtermResult from './Midtermresult'
import { social, Teacherlinks } from '../data';
import {Link, Route, Switch} from "react-router-dom"
import Psycomotor from './psycomotor';
import Affective from './affective';
import Attendance from './Attendance';
import Midtermrecord from './Midtermrecord';
import Midtermrecord2 from './Midtermrecord2';
import Termrecord from './termrecord';
import Termcomment from './termcomment'
import Midtermcomment from './midtermcomment';
import UpdateMidtermRecord from './updatemidtermrecord'
import UpdatetermRecord from './updatetermrecord'

import {ClassProvider} from '../admin/context/classContext'
import {StudentProvider} from '../admin/context/studentContext'
import {SubjectProvider} from '../admin/context/subjectContext'
import {SubjectcombinationProvider} from '../admin/context/subjectcombinationContext'
import {StaffProvider} from '../admin/context/staffContext'
import {ResultProvider} from './context/result.context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
<ClassProvider>
<StudentProvider>
<SubjectProvider>
<SubjectcombinationProvider>
<StaffProvider>
  <ResultProvider>
    <div className="content">
      



    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <ul className='links teacher-link'>
        {Teacherlinks.map((link) => {
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
 <Route path="/record/midterm2">
 <Midtermrecord2/>

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
</ResultProvider>
 </StaffProvider>
</SubjectcombinationProvider>
</SubjectProvider>
</StudentProvider>
</ClassProvider>
  );
};

export default Sidebar;

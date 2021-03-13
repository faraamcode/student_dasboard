import React from 'react';
import Modal from './Modal';
import StudentSidebar from './student/Sidebar.jsx';
import TeacherSidebar from './teacher/sidebar.jsx';
import AdminSidebar from './admin/sidebar'

import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
   

   <Home />
      <Modal />
      {/* <StudentSidebar /> */}
      {/* <TeacherSidebar/> */}
 
    <AdminSidebar/>
    </Router>
    </>
  );
}

export default App;

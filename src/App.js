import React from 'react';
import Modal from './Modal';
import StudentSidebar from './student/Sidebar.jsx';
import TeacherSidebar from './teacher/sidebar.jsx';
import AdminSidebar from './admin/sidebar'
import {AdminProvider} from './context/context'
import {SidebarContext, SidebarProvider} from './context/sideBarcontext'
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <>
    <SidebarProvider>

    <AdminProvider>
    <Router>
   

   <Home />
  
      <Modal />
      {/* <StudentSidebar /> */}
      {/* <TeacherSidebar/> */}
 
    <AdminSidebar/>
    </Router>

    </AdminProvider>
    </SidebarProvider>
    </>
  );
}

export default App;

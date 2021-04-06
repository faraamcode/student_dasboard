import React from 'react';
import Modal from './Modal';
import StudentSidebar from './student/Sidebar.jsx';
import TeacherSidebar from './teacher/sidebar.jsx';
import AdminSidebar from './admin/sidebar'
import {ClassProvider} from './context/context'
import {SidebarContext, SidebarProvider} from './context/sideBarcontext'
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <>
    <SidebarProvider>

    <ClassProvider>
    <Router>
   

   <Home />
  
      <Modal />
      <StudentSidebar />
      {/* <TeacherSidebar/> */}
 
    {/* <AdminSidebar/> */}
    </Router>

    </ClassProvider>
    </SidebarProvider>
    </>
  );
}

export default App;

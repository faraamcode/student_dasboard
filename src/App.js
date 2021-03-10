import React from 'react';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
   

      <Home />
      <Modal />
      <Sidebar />

    </Router>
    </>
  );
}

export default App;

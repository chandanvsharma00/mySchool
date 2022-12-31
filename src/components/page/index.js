import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from '../Admin';
import Teacher from '../Teacher';
import Student from '../Student';
import Login from '../login'
import NavBar from '../NavBar'

function Page() {
  return (
    <>
        {/* <NavBar/> */}
    <Router>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/student" element={<Student />} />
      {/* <Route path="bar" element={<Bar />} /> */}
    </Routes>
   </Router>
  
    </>
  )
}

export default Page

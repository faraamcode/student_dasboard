import React, { useContext, useState, useEffect } from "react";
const geturl = "http://localhost:3000/attendance";
const AttendanceContext = React.createContext();

const AttendanceProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(attendance);
    const { student, session, term, present, absent, time_school_open } =
      attendance;
    const submitData = {
      admission_no: student,
      session: session,
      term: term,
      class_id: attendance.class,
      time_school_open: time_school_open,
      present_time: present,
      absent_time: absent,
    };
    // console.log(submitData);
    fetch(geturl, {
      method: "post",
      body: JSON.stringify(submitData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setMessage(data.message));
  };
  const handleChangeMain = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAttendance((previousState) => ({ ...previousState, [name]: value }));
    console.log(attendance);
  };
  const [attendance, setAttendance] = useState({});

  return (
    <AttendanceContext.Provider
      value={{
        message,
        handleSubmit,
        handleChangeMain,
        setAttendance,
        attendance,
      }}
    >
      {children}
    </AttendanceContext.Provider>
  );
};

const UseAttendanceContext = () => {
  return useContext(AttendanceContext);
};

export { AttendanceProvider, UseAttendanceContext };

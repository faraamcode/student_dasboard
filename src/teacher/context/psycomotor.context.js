import React, { useContext, useState, useEffect } from "react";
const geturl = "http://localhost:3000/psycomotor";
const PsycomotorContext = React.createContext();

const PsycomotorProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { student, session, term, psycomotortype, grade } = psycomotor;
    const submitData = {
      admission_no: student,
      class_id: psycomotor.class,
      term: term,
      session: session,
      psycomotor_name: psycomotortype,
      grade: grade,
    };
    console.log(submitData);
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
    setPsycomotor((previousState) => ({ ...previousState, [name]: value }));
  };
  const [psycomotor, setPsycomotor] = useState({});

  return (
    <PsycomotorContext.Provider
      value={{ message, handleSubmit, handleChangeMain, setPsycomotor }}
    >
      {children}
    </PsycomotorContext.Provider>
  );
};

const UsePsycomotorContext = () => {
  return useContext(PsycomotorContext);
};

export { PsycomotorProvider, UsePsycomotorContext };

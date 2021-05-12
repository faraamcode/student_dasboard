import React, { useContext, useState, useEffect } from "react";
const geturl = "http://localhost:3000/affective";
const AffectiveContext = React.createContext();

const AffectiveProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(affective);
    const { student, session, term, affective_name, grade } = affective;
    const submitData = {
      admission_no: student,
      class_id: affective.class,
      term: term,
      session: session,
      affective_name,
      grade: grade,
    };

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
    setAffective((previousState) => ({ ...previousState, [name]: value }));
  };
  const [affective, setAffective] = useState({});

  return (
    <AffectiveContext.Provider
      value={{ message, handleSubmit, handleChangeMain, setAffective }}
    >
      {children}
    </AffectiveContext.Provider>
  );
};

const UseAffectiveContext = () => {
  return useContext(AffectiveContext);
};

export { AffectiveProvider, UseAffectiveContext };

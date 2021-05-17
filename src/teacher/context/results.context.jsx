import React, { useContext, useState, useEffect } from "react";
const geturl = "http://localhost:3000/result/term";
const ResultsContext = React.createContext();

const ResultsProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(affective);
    const { student, session, term } = result;

    const submitData = {
      admission_no: student,
      class_id: result.class,
      term: term,
      session: session,
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
      .then((data) => console.log(data));
  };
  const handleChangeMain = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setResult((previousState) => ({ ...previousState, [name]: value }));
  };
  const [result, setResult] = useState({});

  return (
    <ResultsContext.Provider
      value={{ message, handleSubmit, handleChangeMain, setResult }}
    >
      {children}
    </ResultsContext.Provider>
  );
};
const UseResultsContext = () => {
  return useContext(ResultsContext);
};

export { ResultsProvider, UseResultsContext };

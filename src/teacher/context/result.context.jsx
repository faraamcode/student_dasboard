import React, { useContext, useState, useEffect } from "react";
const geturl = "http://localhost:3000/result";
const ResultContext = React.createContext();

const ResultProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [update, setUpdate] = React.useState(false);
  const admiRef = React.useRef(null);
  const [welcome, setWelcome] = React.useState({});
  const [assignment, setAssignment] = React.useState({});
  const [test, setTest] = React.useState({});

  const [details, setDetails] = React.useState({
    class: "",
    subject: "",
    term: "",
    session: "",
  });

  const updateTestScore = (admission, score1) => {};
  const handleChange1 = (e, id) => {
    const { name, value } = e.target;
    setWelcome((previousState) => ({ ...previousState, [id]: value }));
  };
  const handleChange2 = (e, id) => {
    const { name, value } = e.target;
    setAssignment((previousState) => ({ ...previousState, [id]: value }));
  };
  const handleChange3 = (e, id) => {
    const { name, value } = e.target;
    setTest((previousState) => ({ ...previousState, [id]: value }));
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    const admission = id;
    const welcome_score = welcome[id] || "";
    const assignment_score = assignment[id] || "";
    const test_score = test[id] || "";
    const { subject, term, session } = details;
    const submitData = {
      class_id: details.class,
      subject_id: subject,
      admission_no: admission,
      term: term,
      session: session,
      welcome_test: welcome_score,
      first_assignment: assignment_score,
      first_ca: test_score,
    };
    fetch(geturl, {
      method: "post",
      body: JSON.stringify(submitData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((result) => {
        setMessage(result.message);
      });
  };
  const handleClick2 = (e, id) => {
    e.preventDefault();
    const admission = id;
    const assignment_score = assignment[id] || "";
    const test_score = test[id] || "";
    const { subject, term, session } = details;
    const submitData = {
      class_id: details.class,
      subject_id: subject,
      admission_no: admission,
      term: term,
      session: session,
      second_assignment: assignment_score,
      second_ca: test_score,
    };
    fetch(`${geturl}/secondca`, {
      method: "post",
      body: JSON.stringify(submitData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((result) => {
        setMessage(result.message);
      });
  };

  const handleClick3 = (e, id) => {
    e.preventDefault();
    const admission = id;
    const exam = test[id] || "";
    const { subject, term, session } = details;
    const submitData = {
      class_id: details.class,
      subject_id: subject,
      admission_no: admission,
      term: term,
      session: session,
      exam: exam,
    };
    fetch(`${geturl}/exam`, {
      method: "post",
      body: JSON.stringify(submitData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((result) => {
        setMessage(result.message);
      });
  };

  return (
    <ResultContext.Provider
      value={{
        message,
        handleClick2,
        handleClick3,
        setUpdate,
        update,
        details,
        setDetails,
        handleChange1,
        handleChange2,
        handleChange3,
        handleClick,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

const UseResultContext = () => {
  return useContext(ResultContext);
};

export { ResultProvider, UseResultContext };

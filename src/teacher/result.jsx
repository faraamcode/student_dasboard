import React from "react";
import { FaBook } from "react-icons/fa";
import { UseClassContext } from "../admin/context/classContext";
import { UseStudentContext } from "../admin/context/studentContext";
import { UseResultsContext } from "./context/results.context";

const ResultForm = () => {
  const { classDetails } = UseClassContext();
  const { fetchStudentByClass, studentDetails } = UseStudentContext();
  const { message, handleSubmit, handleChangeMain, setResult } =
    UseResultsContext();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setResult((previousState) => ({ ...previousState, [name]: value }));
    e.preventDefault();
    fetchStudentByClass(value);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h5> Student result</h5>
      </div>
      <div className="main-form">
        <form action="" className="form teacher-result" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="">Class</label>
            <select name="class" id="" onChange={handleChange}>
              <option value="">----select a class---</option>
              {classDetails.map((item) => (
                <option value={item.id}>{item.class_name}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="">Student</label>
            <select name="student" id="" onChange={handleChangeMain}>
              <option value="">----select a student---</option>
              {studentDetails.map((item) => (
                <option
                  value={item.admission_no}
                >{`${item.last_name}  ${item.other_names}`}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="">Session</label>
            <select name="session" id="" onChange={handleChangeMain}>
              <option value="">----select a session---</option>
              <option value="20/20">20/20</option>
              <option value="20/21">20/21</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="">Term</label>
            <select name="term" id="" onChange={handleChangeMain}>
              <option value="">----select a term---</option>
              <option value="first">First</option>
              <option value="second">Second</option>
              <option value="third">Third</option>
            </select>
          </div>

          <button type="submit" class="submit-btn">
            <FaBook className="btn-icon" />
            View
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResultForm;

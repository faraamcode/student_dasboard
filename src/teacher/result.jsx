import React from "react";
import { FaBook } from "react-icons/fa";
import axios from "axios";
import { saveAs } from "file-saver";

const ResultForm = () => {
  const createAndDownloadPdf = (e) => {
    e.preventDefault();
    // axios
    //   .post("http://localhost:3000/create-pdf")
    //   .then(() =>
    //     axios.get("http://localhost:3000/fetch-pdf", { responseType: "blob" })
    //   )
    //   .then((res) => {
    //     console.log("hii");
    //     const pdfBlob = new Blob([res.data], { type: "application/pdf" });

    //     saveAs(pdfBlob, "newPdf.pdf");
    //   });
    // console.log("you clicked me");

    fetch("http://localhost:3000/create-pdf", {
      method: "post",
    }).then((result) => {
      if (result) {
        saveAs("http://localhost:3000/result.pdf", "newPdf.pdf");
      }
    });
    //   console.log(result);
    //   const pdfBlob = new Blob([res.data], { type: "application/pdf" });

    // then((res) => {
    // });
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h5> Student result</h5>
      </div>
      <div className="main-form">
        <form action="" className="form teacher-result">
          <div className="form-control">
            <label htmlFor="">Class</label>
            <select name="session" id="">
              <option value="">----select a session---</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="">Student</label>
            <select name="session" id="">
              <option value="">----select a term---</option>
              <option value="">First</option>
              <option value="">Second</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="">Session</label>
            <select name="session" id="">
              <option value="">----select a term---</option>
              <option value="">First</option>
              <option value="">Second</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="">Term</label>
            <select name="session" id="">
              <option value="">----select a term---</option>
              <option value="">First</option>
              <option value="">Second</option>
            </select>
          </div>

          <button type="button" class="submit-btn">
            <FaBook className="btn-icon" onClick={createAndDownloadPdf} />
            download
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResultForm;

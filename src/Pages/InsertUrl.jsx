import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

export default function InsertUrl() {
    const [showPopup, setShowPopup] = useState(false);
    const handleOpenPopup = () => {
        setShowPopup(true);
      };
    
      const handleClosePopup = () => {
        setShowPopup(false);
      };
    
  return (
    <div>
      <Navbar />
      {showPopup && (
        <div className="overlay">
          <div className="popup">
            <h2 className="font-semibold fs-4 mb-3">Insert Url</h2>
            <form className="flex justify-content-center align-items-center ">
                <div className="w-100">
              <label htmlFor="name">Url :</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-2 border-black  rounded w-100 "
                required
              />
              </div>
              <button type="submit" className="theme_btn p-2 w-48 ">Submit</button>
            </form>
            <button onClick={handleClosePopup} className="bg-black text-white p-2 rounded ">Close</button>
          </div>
        </div>
      )}
      <h1 className="text-center fs-4 fw-medium my-3 ">Web Scrapper </h1>
      <div className="row mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 py-0">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col" style={{ alignSelf: "center" }}>
                  Category Name
                </th>
                <th scope="col" style={{ alignSelf: "center" }}>
                  Scrap
                </th>
                <th scope="col" style={{ alignSelf: "center" }}>
                  Insert Url
                </th>
              </tr>
            </thead>
            <tbody>
              <tr key="1">
                <td>name </td>
                <td>Scrap</td>
                <td>
                  <button className="theme_btn p-2 rounded " onClick={handleOpenPopup}>
                    Insert Url
                  </button>
                  <Link to='/UrlPage' className=" p-2  mx-2 rounded bg bg-success text-white " onClick={handleOpenPopup}>
                    Go to Url Page 
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Navbar from "../Components/Navbar";

export default function UrlPage() {
  return (
    <div>
        <Navbar/>
      <h1 className="text-center fs-4 fw-medium my-3 ">URLS</h1>
      <div className="row mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 py-0">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col" style={{ alignSelf: "center" }}>
                  Url
                </th>
                <th scope="col" style={{ alignSelf: "center" }}>
                 Action 
                </th>
                <th scope="col" style={{ alignSelf: "center" }}>
                 Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr key="1">
                <td>name </td>
                <td>
                  {" "}
                  <button className="theme_btn p-2 rounded ">Delete</button>
                </td>
                <td>
                  <button className="theme_btn p-2 bg-success rounded  ">
                    Move to
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

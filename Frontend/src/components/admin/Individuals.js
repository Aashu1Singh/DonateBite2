import React, { useEffect, useState } from "react";
import classes from "./dashTable/dashTable.module.css";
import axios from "../../api/axios";

export const Individuals = () => {
  const [datatable, setDatatable] = useState([]);
  const [search, setSearch] = useState("");
  const getReqOrgList = async () => {
    try {
      const data = await axios.get(
        `http://localhost:8070/requester/fetchindividuals`
      );
      setDatatable(data.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(datatable);

  useEffect(() => {
    getReqOrgList();
  }, []);
  return (
    <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            {" "}
            {/* full width instead of col-6 */}
            <div className={classes.DashTable}>
              <div className={classes.TableBack}>
                <table className={classes.Table}>
                  <thead>
                    {" "}
                    {/* wrap table headings inside <thead> */}
                    <tr>
                      <th>Name</th>
                      <th>Email </th>
                      <th>Contact Number</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datatable &&
                      datatable.map((org) => (
                        <tr key={org?._id}>
                          <td>
                            {org?.firstName} {org?.lastName}
                          </td>
                          <td>{org?.email}</td>
                          <td>{org?.contactNumber}</td>
                          <div className={classes.ActionBtnSec}>
                            <button
                              className="btn btn-outline-success"
                              onClick={() => {
                                // onView(org._id);
                              }}
                            >
                              View
                            </button>
                            <button
                              className="btn btn-outline-danger"
                              onClick={() => {
                                // onDelete(org._id);
                              }}
                            >
                              Remove 
                            </button>
                          </div>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

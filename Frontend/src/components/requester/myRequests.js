import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { myRequests } from "../../api/requester.api";
import Footer from "../Footer";
import NavBar from "../NavBar";
import "./footer.css";
import NoItems from "../common/noItems/noItems";
import jspdf from "jspdf";
import "jspdf-autotable";
import img from "./banner.png";

export default function MyRequests() {
  const { userId } = useParams();
  const [showRequests, setShowRequests] = useState([]);
  const [requests, setRequests] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    myRequests(userId).then((res) => {
      setRequests(res.data.requests);
      console.log(res.data);
    });
  }, [userId]);

  useEffect(() => {
    setShowRequests(
      requests.filter(
        (request) =>
          request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          request.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, requests]);

  const generateMyRequestsReport = (tickets) => {
    const doc = new jspdf();
    const tableColumn = ["Request ID", "Request Title", "Request Description"];
    const tableRows = [];

    tickets.map((ticket) => {
      const ticketData = [ticket._id, ticket.title, ticket.description];
      tableRows.push(ticketData);
    });

    const date = Date().split(" ");
    const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    // right down width height
    doc.addImage(img, "PNG", 0, 0, 250, 30);

    doc.autoTable(tableColumn, tableRows, {
      styles: { fontSize: 8 },
      startY: 35,
    });

    // doc.text(, 14, 23).setFontSize(9);
    doc.save(`Requests_Report_${dateStr}.pdf`);
  };

  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-10">
            <h4 className="pt-4 ms-4">My Requests</h4>
          </div>

          <div className="col-2">
            <button
              class="btn btn-primary d-block m-0 mt-3"
              onClick={() => {
                generateMyRequestsReport(requests);
              }}
            >
              {" "}
              Generate Report{" "}
            </button>
          </div>
          <hr className="hr-request-fund" />

          {requests.length === 0 ? (
            <NoItems message="No completed funds available." />
          ) : (
            <div className="d-flex justify-content-center mb-3">
              <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="input-group input-group-outline bg-white">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search here..."
                    aria-label="Search"
                    onChange={(e) => {
                      setsearchTerm(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>
            </div>
          )}
          {requests.length > 0 && showRequests.length === 0 ? (
            <NoItems message="No result found." />
          ) : (
            <div className="row">
              {showRequests.map((request) => (
                // <Link
                //   to={`/requester/view/request/${request._id}`}
                //   key={request._id}
                // >
                <div className="card mx-4 mb-3 shadow rounded">
                  <div className="row g-0">
                    {/* Left Side - Image */}
                    <div className="col-md-4">
                      <img
                        src={request.requestImage}
                        className="img-fluid rounded-start"
                        alt="Request"
                        style={{ height: "100%", objectFit: "cover" }}
                      />
                    </div>

                    {/* Right Side - Content */}
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="card-title mb-0">{request.title}</h5>
                          <span className="badge bg-success">
                            {request.city}, {request.state}
                          </span>
                        </div>

                        <p
                          className="card-text text-muted"
                          style={{ fontSize: "14px" }}
                        >
                          {request.description}
                        </p>

                        <hr />

                        <div className="d-flex align-items-center">
                          <i
                            className="bi bi-person-circle me-2"
                            style={{ fontSize: "24px" }}
                          ></i>
                          <h6 className="mb-0">
                            {/* {request.fname} {request.lname} */}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                // </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

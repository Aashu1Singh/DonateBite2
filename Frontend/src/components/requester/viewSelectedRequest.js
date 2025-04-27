import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { useParams, useNavigate } from "react-router-dom";
import { removeRequest } from "../../api/requester.api";
import { getCookie } from "../common/getCookie";
import axios from "../../api/axios";

const LOGIN_URL = "/requester/updateReqStatus";

export default function ViewSelectedRequest({ requestData, getOneRequest }) {
  const { requesterId } = useParams();
  const navigate = useNavigate();
  console.log("requestData", requestData);
  const [localStatus, setLocalStatus] = useState(requestData?.request?.status);
  // console.log("loca ", localStatus);
  useEffect(() => {
    setLocalStatus(requestData?.request?.status);
  }, [requestData]);

  // console.log("response",response.data);
  const handleClick = async (id) => {
    const userId = getCookie("uId");

    try {
      const response = await axios.post(
        `${LOGIN_URL}/${id}`,
        { status: userId },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      // Update local state
      setLocalStatus(userId);

      swal("Request Accepted Successfully!", { icon: "success" });
    } catch (error) {
      console.error(error.response?.data || error.message);
      swal("Something went wrong!", { icon: "error" });
    }

    // No need to mutate requestData directly
    // Optionally refresh the data if needed
    getOneRequest(requesterId);
  };

  const deleteRequest = (e) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "If you remove the fund request, all contributions collected so far will be lost and you won't be able to recover them.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        removeRequest(requesterId)
          .then(() => {
            swal("Fund request has been deleted!", { icon: "success" });
            navigate("/requester/all/requests");
          })
          .catch(() => {
            swal("Something went wrong!", { icon: "error" });
          });
      }
    });
  };

  return (
    <div>
      <h3>{requestData?.title}</h3>
      <div className="row">
        <div className="col-8">
          <div className="card-deck">
            <div className="card">
              <img
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
                src={requestData?.request?.requestImage}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="row border-bottom">
                  <h5 className="text-normal">
                    <i className="bi bi-person-circle"></i>{" "}
                    {requestData?.user?.firstName} {requestData?.user?.lastName} is
                    organizing this fund request.
                  </h5>
                </div>
                <div className="row border-bottom">
                  <p className="card-text">{requestData?.description}</p>
                </div>
              </div>
              <div className="card-body">
                <div className="row border-bottom">
                  <div>
                    {getCookie("roles") != "1984" &&
                      (localStatus == "started" ? (
                        <button
                          className="btn btn-outline-success"
                          onClick={() => handleClick(requesterId)}
                        >
                          Accept this request
                        </button>
                      ) : (
                        <button className="btn btn-success" disabled>
                          Request Accepted
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {requestData?.userId === getCookie("uId") ? (
            <div className="d-flex justify-content-center mt-4">
              <button
                type="button"
                onClick={deleteRequest}
                className="btn btn-danger"
              >
                Remove Fund Request
              </button>
            </div>
          ) : null}
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <div className="row border-bottom">
                <h5 className="card-title">
                  <center>Donor's contact information</center>
                </h5>
              </div>

              <div className="row">
                <div className="col-2 ms-2">
                  <h3>
                    <i className="bi bi-person-circle"></i>
                  </h3>
                </div>
                <div className="col-9 ps-0">
                  <h6 className="pt-2">
                    {requestData?.user?.firstName} {requestData?.user?.lastName}
                  </h6>
                </div>
              </div>

              <div className="row">
                <div className="col-2 ms-2">
                  <h3>
                    <i className="bi bi-geo-alt-fill"></i>
                  </h3>
                </div>
                <div className="col-9 ps-0">
                  <h6 className="pt-2 text-muted">{requestData?.request?.city} , {requestData?.request?.state}</h6>
                </div>
              </div>

              <div className="row">
                <div className="col-2 ms-2">
                  <h3>
                    <i className="bi bi-phone-fill"></i>
                  </h3>
                </div>
                <div className="col-9 ps-0">
                  <h6 className="pt-2 text-muted">
                    {requestData?.user?.contactNumber}
                  </h6>
                </div>
              </div>

              <div className="row">
                <div className="col-2 ms-2">
                  <h3>
                    <i className="bi bi-envelope-open-fill"></i>
                  </h3>
                </div>
                <div className="col-9 ps-0">
                  <h6 className="pt-2 text-muted">
                    {requestData?.user?.email}
                  </h6>
                </div>
              </div>

              <div className="row border-top">
                <h6 className="card-text">
                  <center>Share the request on social networks</center>
                </h6>
              </div>

              <div className="d-flex justify-content-center">
                <h3>
                  <i className="bi bi-facebook me-4"></i>
                </h3>
                <h3>
                  <i className="bi bi-twitter me-4"></i>
                </h3>
                <h3>
                  <i className="bi bi-instagram me-4"></i>
                </h3>
                <h3>
                  <i className="bi bi-whatsapp"></i>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

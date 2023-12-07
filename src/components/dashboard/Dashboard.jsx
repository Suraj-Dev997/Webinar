import React, { useEffect, useState } from "react";
import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap/css/bootstrap.min.css";
import "../../../assets/icon/themify-icons/themify-icons.css";
import "../../../assets/icon/font-awesome/css/font-awesome.min.css";
import "../../../assets/icon/icofont/css/icofont.css";
import "../../../assets/css/jquery.mCustomScrollbar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/constant";

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const [allphysicalMeeting, setAllPhysicalMeeting] = useState([]);

  const handelTabChange = (value) => {
    setCurrentTab(value);
  };

  useEffect(() => {
    getAllMeeting();
  }, []);

  const getAllMeeting = async () => {
    try {
      const res = await axios.get(`${API_URL}/physicalMeeting/getMeeting`);

      setAllPhysicalMeeting(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const phandeMeetingDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${API_URL}/physicalMeeting/deleteMeeting/${id}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pcoded-content">
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="row">
                <div className="col-md-12 col-xl-4">
                  <div className="card bg-c-blue order-card">
                    <div className="card-block">
                      <h6 className="m-b-20">Total Meetings</h6>
                      <h2 className="text-right">
                        <i className="ti-layout-grid2-alt f-left"></i>
                        <span>486</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-xl-4">
                  <div className="card bg-c-yellow order-card">
                    <div className="card-block">
                      <h6 className="m-b-20">Pending Meetings</h6>
                      <h2 className="text-right">
                        <i className="ti-layout-grid2-alt f-left"></i>
                        <span>360</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-xl-4">
                  <div className="card bg-c-green order-card">
                    <div className="card-block">
                      <h6 className="m-b-20">Completed Meetings</h6>
                      <h2 className="text-right">
                        <i className="ti-layout-grid2-alt f-left"></i>
                        <span>40</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h5>Meeting details</h5>
                </div>
                <div className="col-lg-12 col-xl-12">
                  <div className="sub-title"></div>

                  <ul className="nav nav-tabs  tabs" role="tablist">
                    <li className="nav-item" onClick={() => handelTabChange(1)}>
                      <a
                        className={`nav-link ${
                          currentTab === 1 ? "active" : ""
                        }`}
                      >
                        Virtual Meeting
                      </a>
                    </li>
                    <li className="nav-item" onClick={() => handelTabChange(2)}>
                      <a
                        className={`nav-link ${
                          currentTab === 2 ? "active" : ""
                        }`}
                      >
                        Physical Meeting
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content tabs card-block">
                    {currentTab === 1 ? (
                      <div className="active">
                        <div className="d-flex justify-content-between">
                          <div className="input-group col-lg-2">
                            <input
                              type="search"
                              className="form-control form-control-round form-control-sm"
                              placeholder="Search"
                              style={{ borderRadius: "50px" }}
                            />
                          </div>

                          <button
                            className="btn btn-mat btn-primary rounded"
                            style={{ padding: "5px 5px" }}
                          >
                            {" "}
                            <i
                              className="icofont icofont-plus"
                              style={{ color: "#fff" }}
                            ></i>{" "}
                            Add Meeting
                          </button>
                        </div>
                        <div className="card-block table-border-style">
                          <div className="table-responsive">
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>Meeting Details</th>
                                  <th>Expire Date</th>
                                  <th>Status</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <h5>Virtual Meeting One</h5>
                                    <span>Created: Dec 9, 2023</span>
                                  </td>
                                  <td>
                                    <span>15 Dec 2023</span>
                                  </td>
                                  <td>
                                    <label className="label label-success">
                                      Completed
                                    </label>
                                  </td>
                                  <td>
                                    <Link to="/meetingDetails">
                                      <button className="btn btn-success btn-icon">
                                        <i className="icofont icofont-eye"></i>
                                      </button>
                                    </Link>

                                    <Link to={`/editVirtualMeeting/${1234}`}>
                                      <button className="btn btn-primary btn-icon">
                                        <i className="icofont icofont-edit"></i>
                                      </button>
                                    </Link>
                                    <button className="btn btn-danger btn-icon">
                                      <i className="icofont icofont-trash"></i>
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h5>Virtual Meeting One</h5>
                                    <span>Created: Dec 9, 2023</span>
                                  </td>
                                  <td>
                                    <span>15 Dec 2023</span>
                                  </td>
                                  <td>
                                    <label className="label label-success">
                                      Completed
                                    </label>
                                  </td>
                                  <td>
                                    <Link to="/meetingDetails">
                                      <button className="btn btn-success btn-icon">
                                        <i className="icofont icofont-eye"></i>
                                      </button>
                                    </Link>
                                    <button className="btn btn-primary btn-icon">
                                      <i className="icofont icofont-edit"></i>
                                    </button>
                                    <button className="btn btn-danger btn-icon">
                                      <i className="icofont icofont-trash"></i>
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    ) : currentTab === 2 ? (
                      <div className="active">
                        <div className="d-flex justify-content-between">
                          <div className="input-group col-lg-2">
                            <input
                              type="search"
                              className="form-control form-control-round form-control-sm"
                              placeholder="Search"
                              style={{ borderRadius: "50px" }}
                            />
                          </div>

                          <button
                            className="btn btn-mat btn-primary rounded"
                            style={{ padding: "5px 5px" }}
                          >
                            {" "}
                            <i
                              className="icofont icofont-plus"
                              style={{ color: "#fff" }}
                            ></i>{" "}
                            Add Meeting
                          </button>
                        </div>
                        <div className="card-block table-border-style">
                          <div className="table-responsive">
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>Meeting Details</th>
                                  <th>Expire Date</th>
                                  <th>Status</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {allphysicalMeeting &&
                                  allphysicalMeeting.map((e) => (
                                    <tr key={e.pmid}>
                                      <td>
                                        <h5>Physical Meeting {e.title}</h5>
                                        <span>Created: {e.date}</span>
                                      </td>
                                      <td>
                                        <span>15 Dec 2023</span>
                                      </td>
                                      <td>
                                        <label className="label label-success">
                                          Completed
                                        </label>
                                      </td>
                                      <td>
                                        <Link to="/meetingDetails">
                                          <button className="btn btn-success btn-icon">
                                            <i className="icofont icofont-eye"></i>
                                          </button>
                                        </Link>
                                        <Link
                                          to={`/editPhysicalMeeting/${1234}`}
                                        >
                                          <button className="btn btn-primary btn-icon">
                                            <i className="icofont icofont-edit"></i>
                                          </button>
                                        </Link>
                                        <button
                                          onClick={() =>
                                            phandeMeetingDelete(e.pmid)
                                          }
                                          className="btn btn-danger btn-icon"
                                        >
                                          <i className="icofont icofont-trash"></i>
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                <tr>
                                  <td>
                                    <h5>Physical Meeting One</h5>
                                    <span>Created: Dec 9, 2023</span>
                                  </td>
                                  <td>
                                    <span>15 Dec 2023</span>
                                  </td>
                                  <td>
                                    <label className="label label-success">
                                      Completed
                                    </label>
                                  </td>
                                  <td>
                                    <Link to="/meetingDetails">
                                      <button className="btn btn-success btn-icon">
                                        <i className="icofont icofont-eye"></i>
                                      </button>
                                    </Link>
                                    <button className="btn btn-primary btn-icon">
                                      <i className="icofont icofont-edit"></i>
                                    </button>
                                    <button className="btn btn-danger btn-icon">
                                      <i className="icofont icofont-trash"></i>
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div id="styleSelector"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

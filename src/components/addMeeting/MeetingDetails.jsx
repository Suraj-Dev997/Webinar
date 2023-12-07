import React from 'react'


const MeetingDetails = () => {
  return (
    <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">

                                        <div className="page-body">
                                            <div className="container">
                                                <h1 className="page-title">
                                                    Meeting deatils
                                                </h1>


                                                <div className="row">

                                                    <div className="col-lg-4">
                                                        <div className="card card-profile">

                                                            <img src="assets/images/poster.jpg" alt=""
                                                                style={{width:'100%'}}/>
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-8">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className="alert alert-success" role="alert">
                                                                    <i className="icofont icofont-checked mr-2"></i>This
                                                                    is a
                                                                    Title of
                                                                    Meeting
                                                                </div>
                                                                <div className="card">
                                                                    <div className="card-status bg-blue"></div>
                                                                    <div className="card-header">
                                                                        <h3 className="card-title">Meeting Details</h3>

                                                                    </div>
                                                                    <div className="card-body">

                                                                        <div className="m-2">
                                                                            <b>Meeting Type: </b> Online Meeting
                                                                        </div>
                                                                        <div className="m-2">
                                                                            <b>Meeting Date: </b> 10/01/2023
                                                                        </div>
                                                                        <div className="m-2">
                                                                            <b>Meeting Venue: </b> Delhi
                                                                        </div>
                                                                        <div className="m-2">
                                                                            <b>Coordinator Name: </b> Online Meeting
                                                                        </div>
                                                                        <div className="m-2">
                                                                            <b>Coordinator Mobile: </b> Online Meeting
                                                                        </div>
                                                                        <div className="m-2">
                                                                            <b>Attendence Link: </b> <input name="url"
                                                                                type="text" className="form-control"
                                                                                value="https://test.com"/>
                                                                        </div>
                                                                        <div className="m-2">
                                                                            <b>Download: </b> <button type="button"
                                                                                className="btn btn-danger"><i
                                                                                    className="icofont icofont-download-alt mr-4"></i>
                                                                                Download
                                                                                JPG</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card">
                                                                    <div className="card-status bg-red-dark"></div>
                                                                    <div className="card-header">
                                                                        <h3 className="card-title">Speaker Details</h3>

                                                                    </div>
                                                                    <div className="card-body">
                                                                        <div className="card">
                                                                            <div className="card-body">
                                                                                <div className="media">
                                                                                    <span className="avatar avatar-xxl mr-5"
                                                                                        style={{backgroundImage: 'url(assets/images/avatar-2.jpg)'}}></span>
                                                                                    <div className="media-body">
                                                                                        <h4 className="m-0">Juan Hernandez
                                                                                        </h4>
                                                                                        <p className="text-muted mb-0">
                                                                                            Webdeveloper</p>
                                                                                        <p className="text-muted mb-0">Bio1
                                                                                        </p>
                                                                                        <p className="text-muted mb-0">Bio2
                                                                                        </p>
                                                                                        <p className="text-muted mb-0">Bio3
                                                                                        </p>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card">
                                                                            <div className="card-body">
                                                                                <div className="media">
                                                                                    <span className="avatar avatar-xxl mr-5"
                                                                                        style={{backgroundImage: 'url(assets/images/avatar-2.jpg)'}}></span>
                                                                                    <div className="media-body">
                                                                                        <h4 className="m-0">Juan Hernandez
                                                                                        </h4>
                                                                                        <p className="text-muted mb-0">
                                                                                            Webdeveloper</p>
                                                                                        <p className="text-muted mb-0">Bio1
                                                                                        </p>
                                                                                        <p className="text-muted mb-0">Bio2
                                                                                        </p>
                                                                                        <p className="text-muted mb-0">Bio3
                                                                                        </p>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card">
                                                                            <div className="card-body">
                                                                                <div className="media">
                                                                                    <span className="avatar avatar-xxl mr-5"
                                                                                        style={{backgroundImage: 'url(assets/images/avatar-2.jpg)'}}></span>
                                                                                    <div className="media-body">
                                                                                        <h4 className="m-0">Juan Hernandez
                                                                                        </h4>
                                                                                        <p className="text-muted mb-0">
                                                                                            Webdeveloper</p>
                                                                                        <p className="text-muted mb-0">Bio1
                                                                                        </p>
                                                                                        <p className="text-muted mb-0">Bio2
                                                                                        </p>
                                                                                        <p className="text-muted mb-0">Bio3
                                                                                        </p>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="styleSelector">

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
  )
}

export default MeetingDetails
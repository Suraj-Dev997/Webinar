import axios from 'axios';
import React, { useState } from 'react'
import { API_URL } from '../../utils/constant';

import './PhysicalMeeting.css'

const EditPhysicalMeeting = () => {
   
    const [currentIndex, setCurrentIndex] = useState(1)

    const [title,setTitle] = useState('');
    const [date, setDate] = useState('');
    const [stime, setStime] = useState('');
    const [etime, setEtime] = useState('');
    const [cname, setCname] = useState('');
    const [cmobile,setCmobile] = useState('');

    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [isEditPopUpOpen, setIsEditPopUpOpen] = useState(false);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);


    const handelShowPreview = ()=>{
        setIsPreviewOpen(true)
    }

    const handelSetPopUp = ()=>{
        setIsPopUpOpen(true)
    }

    const handelSetEditPopUp = ()=>{
        setIsEditPopUpOpen(true)
    }

    const handelClosePopup = ()=>{
        setIsPopUpOpen(false)
    }

    const handelCloseEditPopup = ()=>{
        setIsEditPopUpOpen(false)
    }

    const handelClosePreviewPopup = ()=>{
        setIsPreviewOpen(false)
    }
  
    const handelIndexChange = (value)=>{
        setCurrentIndex(value)
    }
     
  
    const handelPhycialMeet = async()=>{

        try {
          const res  = await  axios.post(`${API_URL}/physicalMeeting/createMeeting`, {title,date,stime,etime,cname,cmobile});
           console.log(res)
        } catch (error) {
            console.log(error)
        }
    }


    
  

  return (
    <div>
        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">

                                        <div className="page-body">
                                            <div className="card container">
                                                <div className="card-header">
                                                    <h5>Add Physical Meeting</h5>


                                                </div>
                                                <div className="card-block tab-icon">
                                                   
                                                    <div className="row ">
                                                        <div className="col-lg-12 col-xl-12">
                                                           
                                                            <div className="sub-title">Fill all details</div>
                                                           
                                                            <ul className="nav nav-tabs md-tabs " role="tablist">
                                                                <li className="nav-item" onClick={()=>handelIndexChange(1)}>
                                                                    <a className={`nav-link ${currentIndex===1 ?'active':""}`} data-toggle="tab"
                                                                        href="#home7" role="tab"><i
                                                                            className="icofont icofont-meeting-add"></i>Meeting
                                                                        Details</a>
                                                                    <div className="slide"></div>
                                                                </li>

                                                                <li className="nav-item" onClick={()=>handelIndexChange(2)}>
                                                                    <a className={`nav-link ${currentIndex===2 ?'active':""}`} data-toggle="tab"
                                                                        href="#messages7" role="tab"><i
                                                                            className="icofont icofont-ui-user"></i>Speaker
                                                                        Details</a>
                                                                    <div className="slide"></div>
                                                                </li>
                                                                <li className="nav-item" onClick={()=>handelIndexChange(3)}>
                                                                    <a className={`nav-link ${currentIndex===3 ?'active':""}`} data-toggle="tab"
                                                                        href="#settings7" role="tab"><i
                                                                            className="icofont icofont-ui-file"></i>Select
                                                                        Template</a>
                                                                    <div className="slide"></div>
                                                                </li>
                                                            </ul>
                                                         
                                                            <div className="tab-content card-block">

                                                                {currentIndex== 1 ? (<div className="tab-pane active" id="home7" role="tabpanel">
                                                                    <form action="" className="mx-auto ">
                                                                        <div className="form-group row container mx-auto">
                                                                            <label
                                                                                className="col-sm-4 col-form-label">Meeting
                                                                                Title</label>
                                                                            <div className="col-sm-8">
                                                                                <input type="text" className="form-control" onChange={(e)=>{
                                                                                    setTitle(e.target.value)
                                                                                }}/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row container mx-auto">
                                                                            <label
                                                                                className="col-sm-4 col-form-label">Meeting
                                                                                Date</label>
                                                                            <div className="col-sm-8">
                                                                                <input type="date" className="form-control" onChange={(e)=>{
                                                                                    setDate(e.target.value)
                                                                                }}/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row container mx-auto">
                                                                            <label
                                                                                className="col-sm-4 col-form-label">Meeting
                                                                                Starting Time</label>
                                                                            <div className="col-sm-8">
                                                                                <input type="time" className="form-control" onChange={(e)=>{
                                                                                    setStime(e.target.value)
                                                                                }}/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row container mx-auto">
                                                                            <label
                                                                                className="col-sm-4 col-form-label">Meeting
                                                                                Ending Time</label>
                                                                            <div className="col-sm-8">
                                                                                <input type="time" className="form-control" onChange={(e)=>{
                                                                                    setEtime(e.target.value)
                                                                                }}/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row container mx-auto">
                                                                            <label
                                                                                className="col-sm-4 col-form-label">Coordinator
                                                                                Name</label>
                                                                            <div className="col-sm-8">
                                                                                <input type="text" className="form-control" onChange={(e)=>{
                                                                                    setCname(e.target.value)
                                                                                }}/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group row container mx-auto">
                                                                            <label
                                                                                className="col-sm-4 col-form-label">Coordinator
                                                                                Mobile No.</label>
                                                                            <div className="col-sm-8">
                                                                                <input type="text" className="form-control" onChange={(e)=>{
                                                                                    setCmobile(e.target.value)
                                                                                }}/>
                                                                            </div>
                                                                        </div>

                                                                        <div className="text-right">
                                                                            <button className="btn hor-grd btn-grd-primary "
                                                                                data-toggle="tab" href="#profile7"
                                                                                onClick={()=>{handelIndexChange(2); handelPhycialMeet()}}
                                                                                role="tab">

                                                                                Next</button>
                                                                        </div>
                                                                    </form>

                                                                </div>): currentIndex==2 ? (<div className="tab-pane active" id="messages7" role="tabpanel">
                                                                    <ul className="show-notification"
                                                                        style={{display:'block'}}>
                                                                        <li className="text-center m-3">
                                                                            <button className="btn btn-grd-primary"
                                                                                onClick={handelSetPopUp}
                                                                                data-toggle="modal"
                                                                                data-target="#exampleModalCenter">
                                                                                <i className="icofont icofont-plus"
                                                                                    style={{color:'#fff'}}></i>
                                                                                Add
                                                                                Speaker</button>
                                                                                
                                                                        </li>
                                                                        <li>
                                                                            <div className="media">
                                                                                <img className="d-flex align-self-center img-radius"
                                                                                    src="assets/images/avatar-2.jpg"
                                                                                    alt="Generic placeholder image"/>
                                                                                <div className="media-body ml-5">
                                                                                    <h5 className="notification-user">John
                                                                                        Doe</h5>
                                                                                    <p className="notification-msg">Lorem
                                                                                        ipsum dolor sit amet,
                                                                                        consectetuer elit.</p>
                                                                                    <span className="notification-time">
                                                                                        <div
                                                                                            className="card-block remove-label">
                                                                                            <button onClick={handelSetEditPopUp}
                                                                                                className="btn btn-facebook"
                                                                                                data-toggle="modal"
                                                                                                data-target="#editspeak"><i
                                                                                                    className="icofont icofont-edit"></i></button>

                                                                                            <a href="#fakelink"
                                                                                                className="btn btn-google-plus"><i
                                                                                                    className="icofont icofont-trash"></i></a>

                                                                                        </div>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <hr/>
                                                                        </li>
                                                                        <li>
                                                                            <div className="media">
                                                                                <img className="d-flex align-self-center img-radius"
                                                                                    src="assets/images/avatar-4.jpg"
                                                                                    alt="Generic placeholder image"/>
                                                                                <div className="media-body ml-5">
                                                                                    <h5 className="notification-user">Joseph
                                                                                        William</h5>
                                                                                    <p className="notification-msg">Lorem
                                                                                        ipsum dolor sit amet,
                                                                                        consectetuer elit.</p>
                                                                                    <span className="notification-time">
                                                                                        <div
                                                                                            className="card-block remove-label">
                                                                                            <a href="#fakelink"
                                                                                                className="btn btn-facebook"
                                                                                                data-toggle="modal"
                                                                                                data-target="#editspeak"><i
                                                                                                    className="icofont icofont-edit"></i></a>

                                                                                            <a href="#fakelink"
                                                                                                className="btn btn-google-plus"><i
                                                                                                    className="icofont icofont-trash"></i></a>

                                                                                        </div>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <hr/>
                                                                        </li>
                                                                        <li>
                                                                            <div className="media">
                                                                                <img className="d-flex align-self-center img-radius"
                                                                                    src="assets/images/avatar-3.jpg"
                                                                                    alt="Generic placeholder image"/>
                                                                                <div className="media-body ml-5">
                                                                                    <h5 className="notification-user">Sara
                                                                                        Soudein</h5>
                                                                                    <p className="notification-msg">Lorem
                                                                                        ipsum dolor sit amet,
                                                                                        consectetuer elit.</p>
                                                                                    <span className="notification-time">
                                                                                        <div
                                                                                            className="card-block remove-label">
                                                                                            <a href="#fakelink"
                                                                                                className="btn btn-facebook"
                                                                                                data-toggle="modal"
                                                                                                data-target="#editspeak"><i
                                                                                                    className="icofont icofont-edit"></i></a>

                                                                                            <a href="#fakelink"
                                                                                                className="btn btn-google-plus"><i
                                                                                                    className="icofont icofont-trash"></i></a>

                                                                                        </div>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <hr/>
                                                                        </li>
                                                                    </ul>
                                                                    <div className="">
                                                                        <button className="btn hor-grd btn-grd-primary "
                                                                            data-toggle="tab" href="#profile7"
                                                                            onClick={()=>handelIndexChange(1)}
                                                                            role="tab">

                                                                            Previous</button>
                                                                        <button
                                                                            className="btn hor-grd btn-grd-primary float-right"
                                                                            data-toggle="tab" href="#profile7"
                                                                            onClick={()=>handelIndexChange(3)}
                                                                            role="tab">

                                                                            Next</button>
                                                                    </div>
                                                                </div>):currentIndex== 3 ?(<div className="tab-pane active" id="settings7" role="tabpanel">
                                                                    <form action="" id="Test &amp; Survey" method="post"
                                                                        className="card tabcontent" style={{display:'block'}}>
                                                                        <div className="row row-cards row-deck">
                                                                            <div className="col-sm-6 col-xl-4">
                                                                                <div className="card">
                                                                                    <div className="containerc">
                                                                                        <img src="assets/images/poster.jpg"
                                                                                            alt="" className="imgposter"/>

                                                                                        <div className="overlay">
                                                                                            <div className="text"><button
                                                                                                    onClick={handelShowPreview}
                                                                                                    type="button"
                                                                                                    className="btn btn-danger"
                                                                                                    data-toggle="modal"
                                                                                                    data-target="#exampleModal2"><i
                                                                                                        className="fe fe-file mr-2"></i>Preview
                                                                                                    Invite</button><button
                                                                                                    type="button"
                                                                                                    className="btn btn-danger mt-2"><i
                                                                                                        className="fe fe-code mr-2"></i>Preview
                                                                                                    Website</button>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                    <button type="button"
                                                                                        className="btn btn-primary mx-auto mt-3 mb-3">Select</button>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-6 col-xl-4">
                                                                                <div className="card">
                                                                                    <div className="containerc">
                                                                                        <img src="assets/images/poster.jpg"
                                                                                            alt="" className="imgposter"/>

                                                                                        <div className="overlay">
                                                                                            <div className="text"><button
                                                                                                    type="button"
                                                                                                    className="btn btn-danger"
                                                                                                    data-toggle="modal"
                                                                                                    data-target="#exampleModal2"><i
                                                                                                        className="fe fe-file mr-2"></i>Preview
                                                                                                    Invite</button><button
                                                                                                    type="button"
                                                                                                    className="btn btn-danger mt-2"><i
                                                                                                        className="fe fe-code mr-2"></i>Preview
                                                                                                    Website</button>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                    <button type="button"
                                                                                        className="btn btn-primary mx-auto mt-3 mb-3">Select</button>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-6 col-xl-4">
                                                                                <div className="card">
                                                                                    <div className="containerc">
                                                                                        <img src="assets/images/poster.jpg"
                                                                                            alt="" className="imgposter"/>

                                                                                        <div className="overlay">
                                                                                            <div className="text"><button
                                                                                                    type="button"
                                                                                                    className="btn btn-danger"
                                                                                                    data-toggle="modal"
                                                                                                    data-target="#exampleModal2"><i
                                                                                                        className="fe fe-file mr-2"></i>Preview
                                                                                                    Invite</button><button
                                                                                                    type="button"
                                                                                                    className="btn btn-danger mt-2"><i
                                                                                                        className="fe fe-code mr-2"></i>Preview
                                                                                                    Website</button>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                    <button type="button"
                                                                                        className="btn btn-primary mx-auto mt-3 mb-3">Select</button>
                                                                                </div>
                                                                            </div>


                                                                        </div>

                                                                    </form>

                                                                </div>):""}
                                                                

                                                                
                                                                
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
                        
             {isPopUpOpen && (<div className="addspeaker" id="exampleModalCenter" tabIndex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Add Speaker</h5>
                            <button type="button" onClick={handelClosePopup} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-4 col-lg-4">
                                    <label className="form-label">Speaker Photo</label>
                                </div>
                                <div className="col-md-8 col-lg-8">
                                    <div className="form-group">
                                        <input type="file" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4">
                                    <label className="form-label">Speaker Name</label>
                                </div>
                                <div className="col-md-8 col-lg-8">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="example-text-input"
                                            placeholder="Name"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-lg-4">
                                    <label className="form-label">Speaker Qualification</label>
                                </div>
                                <div className="col-md-8 col-lg-8">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="example-text-input"
                                            placeholder="Qualification"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4">
                                    <label className="form-label">Speaker Bios Line 1</label>
                                </div>
                                <div className="col-md-8 col-lg-8">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="example-text-input"
                                            placeholder=".........."/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4">
                                    <label className="form-label">Speaker Bios Line 2</label>
                                </div>
                                <div className="col-md-8 col-lg-8">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="example-text-input"
                                            placeholder=".........."/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4">
                                    <label className="form-label">Speaker Bios Line 3</label>
                                </div>
                                <div className="col-md-8 col-lg-8">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="example-text-input"
                                            placeholder=".........."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">

                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>)}

            {isEditPopUpOpen && (<div className="addspeaker" id="editspeak" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Speaker</h5>
                            <button type="button" onClick={handelCloseEditPopup} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-4 col-lg-4">
                                    <label className="form-label">Speaker Photo</label>
                                </div>
                                <div className="col-md-8 col-lg-8">
                                    <div className="form-group">
                                        <input type="file" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4">
                                    <label className="form-label">Speaker Name</label>
                                </div>
                                <div className="col-md-8 col-lg-8">
                                    <div className="form-group">
                                        <input type="text" value="Rohan" className="form-control" name="example-text-input"
                                            placeholder="Name"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-lg-4">
                                    <label className="form-label">Speaker Qualification</label>
                                </div>
                                <div className="col-md-8 col-lg-8">
                                    <div className="form-group">
                                        <input type="text" value="Md,MBBS" className="form-control"
                                            name="example-text-input" placeholder="Qualification"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4">
                                    <label className="form-label">Speaker Bios Line 1</label>
                                </div>
                                <div className="col-md-8 col-lg-8">
                                    <div className="form-group">
                                        <input type="text" value="test" className="form-control" name="example-text-input"
                                            placeholder=".........."/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4">
                                    <label className="form-label">Speaker Bios Line 2</label>
                                </div>
                                <div className="col-md-8 col-lg-8">
                                    <div className="form-group">
                                        <input type="text" value="test" className="form-control" name="example-text-input"
                                            placeholder=".........."/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-lg-4">
                                    <label className="form-label">Speaker Bios Line 3</label>
                                </div>
                                <div className="col-md-8 col-lg-8">
                                    <div className="form-group">
                                        <input type="text" value="test" className="form-control" name="example-text-input"
                                            placeholder=".........."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">

                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>)}
            
            {isPreviewOpen && (<div className="addspeaker" id="exampleModal2" tabIndex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle"></h5>
                            <button type="button" onClick={handelClosePreviewPopup} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src="assets/images/poster.jpg" alt="" style={{width:'100%'}}/>
                        </div>

                    </div>
                </div>
            </div>)}
            


    </div>
  )
}

export default EditPhysicalMeeting
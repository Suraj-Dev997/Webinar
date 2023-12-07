import React, { useState } from "react";
// import '../../../assets/css/style.css'
// import '../../../assets/css/bootstrap/css/bootstrap.min.css'
// import '../../../assets/icon/themify-icons/themify-icons.css'
// import '../../../assets/icon/font-awesome/css/font-awesome.min.css'
// import '../../../assets/icon/icofont/css/icofont.css'
// import '../../../assets/css/jquery.mCustomScrollbar.css'
import { Link, NavLink, Outlet } from "react-router-dom";

import './Head.css'

const Head = () => {
 
  const [linknum, setLinkNum] = useState(1)

  const handelSetActiveLink = (value)=>{
     setLinkNum(value)
  }
  return (
    <div>
       
        <div id="pcoded" className="pcoded">
            <div className="pcoded-overlay-box"></div>
            <div className="pcoded-container navbar-wrapper">

                <nav className="navbar header-navbar pcoded-header">
                    <div className="navbar-wrapper">
                        <div className="navbar-logo">
                            <a className="mobile-menu" id="mobile-collapse">
                                <i className="ti-menu"></i>
                            </a>
                            <div className="mobile-search">
                                <div className="header-search">
                                    <div className="main-search morphsearch-search">
                                        <div className="input-group">
                                            <span className="input-group-addon search-close"><i className="ti-close"></i></span>
                                            <input type="text" className="form-control" placeholder="Enter Keyword"/>
                                            <span className="input-group-addon search-btn"><i className="ti-search"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to='/dashboard'>
                                <h2>Logo</h2>
                            </Link>
                            <a className="mobile-options">
                                <i className="ti-more"></i>
                            </a>
                        </div>

                        <div className="navbar-container container-fluid">
                            <ul className="nav-left">
                                <li>
                                    <div className="sidebar_toggle"><a><i className="ti-menu"></i></a>
                                    </div>
                                </li>

                            </ul>
                            <ul className="nav-right">


                                <li className="user-profile header-notification">
                                    <a>
                                        <img src="assets/images/avatar-4.jpg" className="img-radius"
                                            alt="User-Profile-Image"/>
                                        <span>User</span>
                                        <i className="ti-angle-down"></i>
                                    </a>
                                    <ul className="show-notification profile-notification">

                                        <li>
                                            <Link to='/'>
                                                <i className="ti-layout-sidebar-left"></i> Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <nav className="pcoded-navbar">
                            <div className="sidebar_toggle"><a><i className="icon-close icons"></i></a></div>
                            <div className="pcoded-inner-navbar main-menu">

                                <div className="pcoded-navigatio-lavel"></div>
                                <ul className="pcoded-item pcoded-left-item">
                                    <li className={linknum===1 ?"active":""}  onClick={()=>handelSetActiveLink(1)}>
                                        <Link to='/dashboard'>
                                            <span className="pcoded-micon"><i className="ti-home"></i></span>
                                            <span className="pcoded-mtext" >Dashboard</span>
                                            <span className="pcoded-mcaret"></span>
                                        </Link>
                                    </li>

                                    <li className={`pcoded-hasmenu ${linknum===2?'active':''}`} onClick={()=>handelSetActiveLink(2)}>
                                        <a>
                                            <span className="pcoded-micon"><i className="ti-layout-grid2-alt"></i></span>
                                            <span className="pcoded-mtext" >Add
                                                Meeting</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                        <ul className="pcoded-submenu">
                                            <li className=" ">
                                                <Link to='/physicalMeeting'>
                                                    <span className="pcoded-micon"><i className="ti-plus"></i></span>
                                                    <span className="pcoded-mtext"
                                                       >Physical</span>
                                                    <span className="pcoded-mcaret"></span>
                                                </Link>
                                            </li>
                                            <li className=" ">
                                                <Link to='/virtualMeeting'>
                                                    <span className="pcoded-micon"><i className="ti-plus"></i></span>
                                                    <span className="pcoded-mtext"
                                                        >Virtual</span>
                                                    <span className="pcoded-mcaret"></span>
                                                </Link>
                                            </li>


                                        </ul>

                                    </li>

                                </ul>

                            </div>
                        </nav>
                       
                        <Outlet/>

                    </div>
                </div>
            </div>
        </div>    
    </div>
  )

};

export default Head;
import React from 'react'
import PropTypes from 'prop-types'
import { Link ,useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Navbar(props) {
  let location = useLocation();
  useEffect(()=>{
    console.log(location.pathname)
  },[location])
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">{props.aboutUs}</Link>
        </li>
      </ul>
      {/* <form className="d-flex mx-3" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      {/* <div className="container">
  <button type="button" className="btn btn-danger mx-3" onClick={props.clor} >Danger</button>
  </div> */}
 
    </div>
    
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
  <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
</div>
  </div>
</nav>   
    
    </>
   
  );
}

Navbar.propTypes = {
    title : PropTypes.string,
    aboutUs : PropTypes.string
}


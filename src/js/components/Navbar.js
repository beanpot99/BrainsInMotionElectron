import React from "react";

export default function Navbar(){
    return(
        <div className="chat-navbar ">
        <nav className="chat-navbar-inner">
          <div className="chat-navbar-inner-left">
          <a className="navbar-brand" href="#"><img src='https://www.seekpng.com/png/detail/945-9455599_parts-of-the-brain-png-easy-simple-brain.png' width="35" height="30"/></a>
            <a href="/" className="btn btn-secondary ml-2">EI Form</a>
            <a href="/" className="btn btn-secondary ml-2">Clinic Form</a>

          </div>
          
          <div className="chat-navbar-inner-right">
            <span className="logged-in-user">Hi Kristi</span>
            <button
              onClick={() => {}}
              className="btn btn-sm btn-secondary ml-2">Logout</button>
            <button
              onClick={() => {}}
              className="btn btn-sm btn-secondary ml-2">Login</button>
          </div>
        </nav>
      </div>
    )
}
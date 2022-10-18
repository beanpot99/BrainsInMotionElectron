import React from "react";

export default function Navbar(){
    return(
        <div className="chat-navbar ">
        <nav className="chat-navbar-inner">
          <div className="chat-navbar-inner-left">
          <a class="navbar-brand" href="#"><img src='https://scx2.b-cdn.net/gfx/news/hires/2017/1-brain.jpg' width="35" height="30"/></a>
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
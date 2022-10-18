import React from "react";
import Navbar from "../components/Navbar";
import Forms from "../components/shared/Forms";
import Search from "../components/Search";
export default function AllForms(){
    return(
    
    <div className='content-wrapper'>
        <Navbar/>
        <div className="col-8 mx-auto mt-3">
          <Search/>
        </div>
       <div className="container-fluid">
           <Forms/>
          </div>
    </div>
    
  )
    
}
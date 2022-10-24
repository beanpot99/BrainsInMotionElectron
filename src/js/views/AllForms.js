import React from "react";
import Navbar from "../components/Navbar";
import Forms from "../components/shared/Forms";
import Search from "../components/Search";
import { useState } from "react";
export default function AllForms(){
  const[searchButton, setSearchButton] = useState("");
  
  return(
    <div className='content-wrapper'>
        <Navbar/>
        <div className="col-8 mx-auto mt-3">
          <Search
          searchPropOne={searchButton}
          searchPropTwo={searchButton}
          searchPropThree={searchButton}
          setSearchPropOne={()=>{
            setSearchButton("EI");
        }}
          setSearchPropTwo={()=>{
            setSearchButton("Clinic");
        }}
          setSearchPropThree={()=>{
            setSearchButton("All");
         }}
          />
        </div>
       <div className="container-fluid">
           <Forms/>
          </div>
    </div>
    
  )
    
}
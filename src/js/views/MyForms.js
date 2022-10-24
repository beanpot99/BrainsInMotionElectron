import React, { useCallback } from "react";
import Navbar from "../components/Navbar";
import Forms from "../components/shared/Forms";
import Search from "../components/Search";
import classes from "./viewStylesheets/MyForms.module.css";
import { useState } from "react";
export default function MyForms(){
    const[EIButton, setEIButton] = useState(false);
    const[clinicButton, setClinicButton] = useState(false);
    const[allButton, setAllButton]=useState(false);
  
  return(
    
    <div className='content-wrapper'>
        <Navbar/>
        <div className="col-7 mx-auto mt-3">
          <Search
          searchPropOne={EIButton}
          searchPropTwo={clinicButton}
          searchPropThree={allButton}
          setSearchPropOne={()=>{
            setEIButton(true);
        }}
          setSearchPropTwo={()=>{
          setClinicButton(true);
        }}
          setSearchPropThree={()=>{
          setAllButton(true);
         }}
          />
        </div>
       <div className="container-fluid">
           <Forms/>
          </div>
    </div>
    
  )
    
}
//searchPropOne,setSearchPropOne, searchPropTwo, setSearchPropTwo, searchPropThree, setSearchPropThree
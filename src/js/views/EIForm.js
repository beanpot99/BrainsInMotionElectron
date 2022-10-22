import React from "react";
import Navbar from "../components/Navbar";
import classes from "../views/viewStylesheets/EIForm.module.css";
import { useState, useEffect } from "react";
export default function EIForm(){
  const [seekingSeeker, setSeekingSeeker] = useState(""); //is a number
    const [seekingSeekerSummaryScore, setSeekingSeekerSummaryScore] = useState("");
    const [avoidingAvoider, setAvoidingAvoider] = useState(""); //is a number
    const [avoidingAvoiderSummaryScore, setAvoidingAvoiderSummaryScore] = useState("");
    const [sensitivitySensor, setSensitivitySensor] = useState(""); //is a number
    const [sensitivitySensorSummaryScore, setSensitivitySensorSummaryScore] = useState("");
    const [registrationBystander, setRegistrationBystander] = useState(""); //is a number
    const [registrationBystanderSummaryScore, setRegistrationBystanderSummaryScore] = useState("");
    const [auditory, setAuditory] = useState(""); //is a number
    const [auditorySummaryScore, setAuditorySummaryScore] = useState("");
    const [visual, setVisual] = useState(""); //is a number
    const [visualSummaryScore, setVisualSummaryScore] = useState("");
    const [touch, setTouch] = useState(""); //is a number
    const [touchSummaryScore, setTouchSummaryScore] = useState("");
    const [movement, setMovement] = useState(""); //is a number
    const [movementSummaryScore, setMovementSummaryScore] = useState("");
    const [bodyPosition, setBodyPosition] = useState(""); //is a number
    const [bodyPositionSummaryScore, setBodyPositionSummaryScore] = useState("");
    const [oral, setOral] = useState(""); //is a number
    const [oralSummaryScore, setOralSummaryScore] = useState("");
    const [conduct, setConduct] = useState(""); //is a number
    const [conductSummaryScore, setConductSummaryScore] = useState("");
    const [socialEmotional, setSocialEmotional] = useState(""); //is a number
    const [socialEmotionalSummaryScore, setSocialEmotionalSummaryScore] = useState("");
    const [attentional, setAttentional] = useState(""); //is a number
    const [attentionalSummaryScore, setAttentionalSummaryScore] = useState("");
    const handleSeekingSeeker=()=>{
       
      if(seekingSeeker>=0 && seekingSeeker<=6){
          setSeekingSeekerSummaryScore("Much Less Than Others");
      }else if(seekingSeeker>=7 && seekingSeeker<=19){
          setSeekingSeekerSummaryScore("Less Than Others");

      }else if(seekingSeeker>=20 && seekingSeeker<=47){
          setSeekingSeekerSummaryScore("Just Like the Majority of Others");

      }else if(seekingSeeker>=48 && seekingSeeker<=60){
          setSeekingSeekerSummaryScore("More Than Others");

      }else if(seekingSeeker>=61 && seekingSeeker<=95){
          setSeekingSeekerSummaryScore("Much More Than Others");

      }
  }
  const handleAvoidingAvoider=()=>{
     
      if(avoidingAvoider>=0 && avoidingAvoider<=7){
          setAvoidingAvoiderSummaryScore("Much Less Than Others");
      }else if(avoidingAvoider>=8 && avoidingAvoider<=20){
          setAvoidingAvoiderSummaryScore("Less Than Others");

      }else if(avoidingAvoider>=21 && avoidingAvoider<=46){
          setAvoidingAvoiderSummaryScore("Just Like the Majority of Others");

      }else if(avoidingAvoider>=47 && avoidingAvoider<=59){
          setAvoidingAvoiderSummaryScore("More Than Others");

      }else if(avoidingAvoider>=60 && avoidingAvoider<=100){
          setAvoidingAvoiderSummaryScore("Much More Than Others");

      }
  }
  const handleSensitivitySensor=()=>{
     
      if(sensitivitySensor>=0 && sensitivitySensor<=6){
          setSensitivitySensorSummaryScore("Much Less Than Others");
      }else if(sensitivitySensor>=7 && sensitivitySensor<=17){
          setSensitivitySensorSummaryScore("Less Than Others");

      }else if(sensitivitySensor>=18 && sensitivitySensor<=42){
          setSensitivitySensorSummaryScore("Just Like the Majority of Others");

      }else if(sensitivitySensor>=43 && sensitivitySensor<=53){
          setSensitivitySensorSummaryScore("More Than Others");

      }else if(sensitivitySensor>=54 && sensitivitySensor<=95){
          setSensitivitySensorSummaryScore("Much More Than Others");

      }
  }
  const handleRegistrationBystander=()=>{
     
      if(registrationBystander>=0 && registrationBystander<=6){
          setRegistrationBystanderSummaryScore("Much Less Than Others");
      }else if(registrationBystander>=7 && registrationBystander<=18){
          setRegistrationBystanderSummaryScore("Less Than Others");

      }else if(registrationBystander>=19 && registrationBystander<=43){
          setRegistrationBystanderSummaryScore("Just Like the Majority of Others");

      }else if(registrationBystander>=44 && registrationBystander<=55){
          setRegistrationBystanderSummaryScore("More Than Others");

      }else if(registrationBystander>=56 && registrationBystander<=110){
          setRegistrationBystanderSummaryScore("Much More Than Others");

      }
  }
  const handleAuditory=()=>{
     
      if(auditory>=0 && auditory<=2){
          setAuditorySummaryScore("Much Less Than Others");
      }else if(auditory>=3 && auditory<=9){
          setAuditorySummaryScore("Less Than Others");

      }else if(auditory>=10 && auditory<=24){
          setAuditorySummaryScore("Just Like the Majority of Others");

      }else if(auditory>=25 && auditory<=31){
          setAuditorySummaryScore("More Than Others");

      }else if(auditory>=32 && auditory<=40){
          setAuditorySummaryScore("Much More Than Others");

      }
  }
  const handleVisual=()=>{
     
      if(visual>=0 && visual<=4){
          setVisualSummaryScore("Much Less Than Others");
      }else if(visual>=5 && visual<=8){
          setVisualSummaryScore("Less Than Others");

      }else if(visual>=9 && visual<=17){
          setVisualSummaryScore("Just Like the Majority of Others");

      }else if(visual>=18 && visual<=21){
          setVisualSummaryScore("More Than Others");

      }else if(visual>=22 && visual<=30){
          setVisualSummaryScore("Much More Than Others");

      }
  }
  const handleTouch=()=>{
     
      if(touch<1){
          setTouchSummaryScore("Much Less Than Others");
      }else if(touch>=1 && touch<=7){
          setTouchSummaryScore("Less Than Others");

      }else if(touch>=8 && touch<=21){
          setTouchSummaryScore("Just Like the Majority of Others");

      }else if(touch>=22 && touch<=28){
          setTouchSummaryScore("More Than Others");

      }else if(touch>=29 && touch<=55){
          setTouchSummaryScore("Much More Than Others");

      }
  }
  const handleMovement=()=>{
     
      if(movement>=0 && movement<=1){
          setMovementSummaryScore("Much Less Than Others");
      }else if(movement>=2 && movement<=6){
          setMovementSummaryScore("Less Than Others");

      }else if(movement>=7 && movement<=18){
          setMovementSummaryScore("Just Like the Majority of Others");

      }else if(movement>=19 && movement<=24){
          setMovementSummaryScore("More Than Others");

      }else if(movement>=25 && movement<=40){
          setMovementSummaryScore("Much More Than Others");

      }
  }
  const handleBodyPosition=()=>{
     
      if(bodyPosition<1){
          setBodyPositionSummaryScore("Much Less Than Others");
      }else if(bodyPosition>=1 && bodyPosition<=4){
          setBodyPositionSummaryScore("Less Than Others");

      }else if(bodyPosition>=5 && bodyPosition<=15){
          setBodyPositionSummaryScore("Just Like the Majority of Others");

      }else if(bodyPosition>=16 && bodyPosition<=19){
          setBodyPositionSummaryScore("More Than Others");

      }else if(bodyPosition>=20 && bodyPosition<=40){
          setBodyPositionSummaryScore("Much More Than Others");

      }
  }
  const handleOral=()=>{
     
      if(oral>=0 && oral<=7){
          setOralSummaryScore("Less Than Others");

      }else if(oral>=8 && oral<=24){
          setOralSummaryScore("Just Like the Majority of Others");

      }else if(oral>=25 && oral<=32){
          setOralSummaryScore("More Than Others");

      }else if(oral>=33 && oral<=50){
          setOralSummaryScore("Much More Than Others");

      }
  }
  const handleConduct=()=>{
     
      if(conduct>=0 && conduct<=1){
          setConductSummaryScore("Much Less Than Others");
      }else if(conduct>=2 && conduct<=8){
          setConductSummaryScore("Less Than Others");

      }else if(conduct>=9 && conduct<=22){
          setConductSummaryScore("Just Like the Majority of Others");

      }else if(conduct>=23 && conduct<=29){
          setConductSummaryScore("More Than Others");

      }else if(conduct>=30 && conduct<=45){
          setConductSummaryScore("Much More Than Others");

      }
  }
  const handleSocialEmotional=()=>{
     
      if(socialEmotional>=0 && socialEmotional<=2){
          setSocialEmotionalSummaryScore("Much Less Than Others");
      }else if(socialEmotional>=3 && socialEmotional<=12){
          setSocialEmotionalSummaryScore("Less Than Others");

      }else if(socialEmotional>=13 && socialEmotional<=31){
          setSocialEmotionalSummaryScore("Just Like the Majority of Others");

      }else if(socialEmotional>=32 && socialEmotional<=41){
          setSocialEmotionalSummaryScore("More Than Others");

      }else if(socialEmotional>=42 && socialEmotional<=70){
          setSocialEmotionalSummaryScore("Much More Than Others");

      }
  }
  const handleAttentional=()=>{
     
      if(attentional<1){
          setAttentionalSummaryScore("Much Less Than Others");
      }else if(attentional>=1 && attentional<=8){
          setAttentionalSummaryScore("Less Than Others");

      }else if(attentional>=9 && attentional<=24){
          setAttentionalSummaryScore("Just Like the Majority of Others");

      }else if(attentional>=25 && attentional<=31){
          setAttentionalSummaryScore("More Than Others");

      }else if(attentional>=32 && attentional<=50){
          setAttentionalSummaryScore("Much More Than Others");

      }
  }
  useEffect(()=>{
    handleSeekingSeeker();
  },[seekingSeeker]);

  useEffect(()=>{
    handleAvoidingAvoider();
  },[avoidingAvoider]);

  useEffect(()=>{
    handleSensitivitySensor();
  },[sensitivitySensor]);

  useEffect(()=>{
    handleRegistrationBystander();
  },[registrationBystander]);

  useEffect(()=>{
    handleAuditory();
  },[auditory]);

  useEffect(()=>{
    handleVisual();
  },[visual]);

  useEffect(()=>{
    handleTouch();
  },[touch]);

  useEffect(()=>{
    handleMovement();
  },[movement]);

  useEffect(()=>{
    handleBodyPosition();
  },[bodyPosition]);

  useEffect(()=>{
    handleOral();
  },[oral]);

  useEffect(()=>{
    handleConduct();
  },[conduct]);

  useEffect(()=>{
    handleSocialEmotional();
  },[socialEmotional]);

  useEffect(()=>{
    handleAttentional();
  },[attentional]);

    return(
<div>
<form >
       <div className='content-wrapper'>
      <Navbar/>
<header className={classes.clinicHeader}>
    <h3 id="clinicHeading">Illinois Early Intervention: Evaluation/Assessment Report</h3>
</header>


<div className={classes.sideBySideTables}>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 1:  Demographic Information</h5>
</div>
    <div className={classes.child}>

        <table className="table table-striped">
          <tbody>
            <tr>
                <td>Child's Name:</td>
                <td><input className="w-100" type="text" value="" name="childName" /></td>
            </tr>
            <tr>
                <td>Date of Birth:</td>
                <td><input className="w-100" type="date" value="" name="dateOfBirth" /></td>
            </tr>
            <tr>
                <td>Parent's Name:</td>
                <td><input className="w-100" type="text" value="" name="parentName" /></td>
            </tr>
            <tr>
                <td>Parent/Guardian:</td>
                <td><input className="w-100" type="text" value="" name="parent" /></td>
            </tr>
            <tr>
                <td>Service Coordinator's Name:</td>
                <td>
                    <select name="therapistChoice">
                        <option value="kristi" name="kristi">Kristi Warren</option>
                        <option value="newTherapist" name="newTherapist">Other people tbd </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>CFC Number:</td>
                <td>
                    <select name="cfcNum">
                        <option  name="cfcOne">Num 1</option>
                        <option name="cfcTwo">Num 2 </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Early Intervention number:</td>
                <td><input className="w-100" type="number" value="" name="EINumber"/></td>
            </tr>
            <tr>
                <td>Chronological Age:</td>
                <td><input className="w-100" type="number" value="" name="chronAge"/></td>
            </tr>
            <tr>
                <td>Adjusted Age:</td>
                <td><input className="w-100" type="number" value="" name="chronAge" /> </td>
            </tr>
            <tr>
                <td>Physician Name:</td>
                <td><input className="w-100" type="text" value="" name="physicianName"/></td>
            </tr>
            <tr>
                <td>Language Spoken:</td>
                <td>
                <input className="w-100" type="text" value="" name="languages"/>
                </td>
                
            </tr>
            </tbody>
        </table>
    </div>
    


<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 2:  Type of Report</h5>
</div>
{/* <div className={classes.sideBySideTables}> */}
    <div className={classes.child}>
        <table className="table table-striped">
          <tbody>
            <tr>
                <td>Select One (for eligibility determination):</td>
                <td>
                    <select>
                        <option>Evaluation</option>
                        <option>Assessment</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Date of Evaluation/Assessment:</td>
                <td><input type="date" value="" name="dateOfBirth"/></td>
            </tr>
            <tr>
                <td>Provider Name:</td>
                <td>
                    <select name="therapistChoice">
                        <option value="kristi" name="kristi">Kristi Warren</option>
                        <option value="newTherapist" name="newTherapist">Other people tbd </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Provider Discipline:</td>
                <td>
                <select name="providerDiscipline">
                        <option value="OT" >OT</option>
                        <option value="COTA" >COTA </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Assessment/Evaluation Location:</td>
                <td>
                <input className="w-100" type="text" value="" name="assessLocation"/>
                </td>
            </tr>
            <tr>
                <td>Provider Phone Number:</td>
                <td>*insert user's phone number</td>
            </tr>
            <tr>
                <td rowSpan="2">Assessment (if child already eligible):</td>
                <td rowSpan="2">
                    <textarea className="form-control" rows="3" name="EIAssessmentText"></textarea>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    
{/* </div> */}
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 3:  Referral Information</h5>
</div>

    <div className={classes.child2}>
        <h6 id="visualTracking">Please list reason for referral, who referred to Child & Family Connections, and parent/guardian concerns: </h6>
        <textarea  className="form-control" rows="3" name="referralInfo" id="referralInfo"></textarea>
    </div><br/>
{/* </div> */}
{/* /////////////////////////////////////////////////////// */}
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 4: Instrument(s) Administered during Evaluation and/or Assessment</h5>
</div>
{/* <div className={classes.sideBySideTables}> */}
    <div className={classes.child2}>
        <table className="table table-striped" >
          <tbody>
            <tr>
                <td className={classes.bordRight}>
                    <p>Title of Instrument Used</p>
                    <input type="text" value="" name="instrumentUsed"/>
                </td>
                <td className={classes.bordRight} >Developmental Domain Addressed</td>
                <td className={classes.bordRight} >Age Equivalent</td>
                <td >Percent of Delay</td>
            </tr>
            <tr>
                <td className={classes.bordRight} rowSpan="3">Peabody Developmental Motor Scales (PDMS 2nd)</td>
                <td className={classes.bordRight}>Physical Domain</td>
                <td className={classes.bordRight}><input type="number" value="" name="physDomAge"/></td>
                <td  name="physDomPercent"><input type="text"></input></td>
            </tr>
            <tr>

                <td className={classes.bordRight}>Grasping</td>
                <td className={classes.bordRight}><input type="number" value="" name="graspAge"/></td>
                <td  name="graspPercent"><input type="text"></input></td>
            </tr>
            <tr>

                <td className={classes.bordRight}>Visual Motor Integration</td>
                <td className={classes.bordRight}><input type="number" value="" name="visualMotorAge"/></td>
                <td  name="visualMotorPercent"><input type="text"></input></td>
            </tr>
            <tr>
                <td className={classes.bordRight}>Fine Motor Quotient (FMQ)</td>
                <td className={classes.bordRight}>Final Score </td>
                <td className={classes.bordRight}><input type="number" value="" name="visualMotorAge"/></td>
                <td  name="finalPercentScore"><input type="text"></input></td>
            </tr>
            </tbody>
        </table>
    </div>
{/* </div> */}
<div className={classes.textDisclaimer}>
    <p className={classes.childSensoryDisclaimer}>The PDMS-2nd Edition is a criterion-referenced assessment, which measures fine and gross motor skill development from birth through age 6.  Each test item is scored as a 0,1, or 2 with the total raw score for each section calculated by adding these points.  Raw scores are converted to standard scores and age equivalents.  Age Equivalent is the least reliable score.  The Fine Motor Quotient(FMQ) is derived by adding the standard scores from the two fine motor sections.  Scores that fall between 90-110 are considered in the average range for this test, with a standard deviation of 15.  The FMQ measures the child’s ability to stack blocks, place simple shapes in a puzzle, grasping patterns, etc.</p>
</div>
{/* //////////////////////////////////////////////////////////////////////////////// */}
<div className={classes.summaryScores}>
<div className={classes.sideBySideTables}>
<div className={classes.child2}>
    <table className="table table-striped ">
        <tbody>
            <tr>
                <td className="font-weight-bold">Category</td>
                <td className="font-weight-bold">Raw Score</td>
                <td></td>
                <td className="font-weight-bold">Summary Score</td>
            </tr>
            <tr>
                <td>
                Seeking/Seeker
                </td>
                <td >
                    <input
                        type="number"
                        value={seekingSeeker}
                        onChange={(e)=>setSeekingSeeker(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/95</td>
                <td>{seekingSeekerSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Avoiding/Avoider
                </td>
                <td >
                    <input
                        type="number"
                        value={avoidingAvoider}
                        onChange={(e)=>setAvoidingAvoider(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/100</td>
                <td>{avoidingAvoiderSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Sensitivity/Sensory
                </td>
                <td >
                    <input
                        type="number"
                        value={sensitivitySensor}
                        onChange={(e)=>setSensitivitySensor(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/95</td>
                <td>{sensitivitySensorSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Registration/Bystander
                </td>
                <td >
                    <input
                        type="number"
                        value={registrationBystander}
                        onChange={(e)=>setRegistrationBystander(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/110</td>
                <td>{registrationBystanderSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Auditory
                </td>
                <td >
                    <input
                        type="number"
                        value={auditory}
                        onChange={(e)=>setAuditory(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/40</td>
                <td>{auditorySummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Visual
                </td>
                <td >
                    <input
                        type="number"
                        value={visual}
                        onChange={(e)=>setVisual(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/30</td>
                <td>{visualSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Touch
                </td>
                <td >
                    <input
                        type="number"
                        value={touch}
                        onChange={(e)=>setTouch(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/55</td>
                <td>{touchSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Movement
                </td>
                <td >
                    <input
                        type="number"
                        value={movement}
                        onChange={(e)=>setMovement(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/40</td>
                <td>{movementSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Body Position
                </td>
                <td >
                    <input
                        type="number"
                        value={bodyPosition}
                        onChange={(e)=>setBodyPosition(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/40</td>
                <td>{bodyPositionSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Oral
                </td>
                <td >
                    <input
                        type="number"
                        value={oral}
                        onChange={(e)=>setOral(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/50</td>
                <td>{oralSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Conduct
                </td>
                <td >
                    <input
                        type="number"
                        value={conduct}
                        onChange={(e)=>setConduct(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/45</td>
                <td>{conductSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Social Emotional
                </td>
                <td >
                    <input
                        type="number"
                        value={socialEmotional}
                        onChange={(e)=>setSocialEmotional(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/70</td>
                <td>{socialEmotionalSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Attentional
                </td>
                <td >
                    <input
                        type="number"
                        value={attentional}
                        onChange={(e)=>setAttentional(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/50</td>
                <td>{attentionalSummaryScore}</td>
            
            </tr>
        
        </tbody>
    </table>
</div>
</div>
</div>
{/* /////////////////////////////////////////////////////////////////////////////////// */}
<div className={classes.textDisclaimer}>
    <p className={classes.childSensoryDisclaimer}>The Sensory Profile 2 was completed by Hazelynn’s mother and scored by this therapist.  It is used to measure a child’s sensory processing abilities and to profile the effect of sensory processing on functional performance in the daily life of a child.  The Toddler portion is standardized for children 7 to 35 months.  Scores are compared to peers of the same age.  Scores that fall in the Just like the majority of others range is considered in the average range.  More than others score is 1 or more standard deviations from the mean, Much more than others is 2 or more standard deviations from the mean.</p>
</div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}> SECTION 5: Evaluation and/or Assessment</h5>
</div>
<div className={classes.childItemsBelowEachOther}>
    <div className={classes.child2}>
        <h6 id="visualTracking">A. Child’s developmental history and summary of parents’ concerns: </h6>
        <textarea className="form-control" rows="3" name="devHistory" id="devHistory"></textarea>
    </div>

<div className={classes.child2}>
    <h6 >B. Summary of medical history:</h6>
    <table className="table table-striped">
      <tbody>
        <tr>
            <td>Pregnancy:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>
        </tr>          
        <tr>
            <td>Delivery:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>Child’s health since birth:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>ER visits/Hospitalizations:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>Allergies:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>Diagnosis:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>Specialists:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>Surgeries:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>Medications:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>Hearing:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>Vision:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        </tbody>
    </table>
</div>
    <div className={classes.child2}>
        <h6 >C. Behavioral Observations of the child:</h6>
        <table className="table table-striped">
          <tbody>
            <tr>
                <td>Environment:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            <tr>
                <td>State of Regulation/Modulation:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            <tr>
                <td>Eye Contact/Communication:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            </tbody>
        </table>
    </div>
    <div className={classes.child2}>
        <h6 >D. Child’s level of functioning in each of the developmental areas tested. (For annual reviews, also include information about the child’s progress towards IFSP outcomes):</h6>
        <table className="table table-striped">
          <tbody>
            <tr>
                <td>STRENGTH/MUSCLE TONE/RANGE OF MOTION:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            <tr>
                <td>FINE MOTOR/GRASPING:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            <tr>
                <td>VISUAL MOTOR INTEGRATION:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            <tr>
                <td>FUNCTIONAL VISION:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            <tr>
                <td>SELF-HELP SKILLS:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            <tr>
                <td>EFFECT OF SENSORY PROCESSING ON DAILY ACTIVITIES:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            </tbody>
        </table>
    </div>
    <div className={classes.child2}>
        <h6 id="visualTracking"> Provide justification for annual redetermination for children not meeting original eligibility criteria:</h6>
        <textarea className="form-control" rows="3" name="devHistory" id="devHistory"></textarea>
    </div>
</div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 6:  Summary and Interpretation</h5>
</div>

<div className={classes.childItemsBelowEachOther}>
    <div className={classes.child2}>
    <h6 id="visualTracking">A. Brief summation of the child’s unique strengths and needs, ability to perform functional skills and how the child is able to participate in family routines.  Include statements about the tool's accuracy in portraying child’s development.</h6>
    <textarea className="form-control" rows="3" name="devHistory" id="sectionSixPartA"></textarea>
</div>
    <div className={classes.child2}>
        <h6 id="visualTracking">If applicable, recommendations for referrals for additional EI assessments and/or other resources outside of Early Intervention to be discussed at the IFSP meeting.</h6>
        <textarea className="form-control" rows="3" name="devHistory" id="sectionSixPartB"></textarea>
    </div>
    </div>
<div className={classes.sideBySideDropdowns}>
<div className={classes.evaluatorName}>
    <select className="form-control"  >
                            <option value="Kristi Warren" name="kristiTherapistClinic">Kristi Warren</option>
                            <option value="New Therapist" name="newTherapistClinic">New therapist </option>
                        </select><br/>
        <p className="h6">Evaluator Printed Name</p>
    </div>
    <div className={classes.evaluatorName}>
    <select className="form-control"  >
                            <option value="Kristi Warren" name="kristiTherapistClinic">Kristi Warren</option>
                            <option value="New Therapist" name="newTherapistClinic">New therapist </option>
                        </select><br/>
        <p className="h6">Evaluator Signature</p>
    </div>
</div> 
<div className={classes.sideBySideDropdowns}>
<div className={`form-group text-right ${classes.buttons}`}>
        <div className={classes.submitButton}>
    <input type="submit" value="Submit" className="btn btn-success"/>
      </div>
      <div className={classes.resetButton}>
    <input type="reset" value="Reset" className="btn btn-success"/>
    </div>
    </div>  
    </div>
    </div>
    </div>
</form>
    </div>
  )
    
}
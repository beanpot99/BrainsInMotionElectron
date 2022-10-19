import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Select from "react-select";
import Form from "react-bootstrap-form/lib/Form";
//TO-DO:
//Automatically fills in the logged in user's information like name and signature
export default function ClinicForm(){
   
    const [dateOfEval, setDateOfEval] = useState("");
    const [patientName, setPatientName] = useState("");
    const [clientPhone, setClientPhone] = useState("(217)");
    const [address, setAddress] = useState("");
    const [parentName, setParentName] = useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [therapist, setTherapist] = useState("");
    const [DOB, setDOB] = useState("");
    const [physicianName, setPhysicianName] = useState("");
    const [payer, setPayer] = useState("");
    const [referral, setReferral] = useState("");
    const [medicalHistory, setMedicalHistory] = useState("");
    const [assessmentMethod, setAssessmentMethod] = useState("");
    const[behavioralObservations, setBehavioralObservations]=useState("");
    const[fineMotorSkills, setFineMotorSkills]=useState("");
    const[communicationStatus, setCommunicationStatus]=useState("");
    const[educationLevel, setEducationLevel]=useState("");
    const[strengthRangeMotion, setStrengthRangeMotion]=useState("");
    const[activitiesDailyLiving, setActivitiesDailyLiving]=useState("");
    const[fearParalysis, setFearParalysis] = useState("present");
     const[moro, setMoro] = useState("present");
    const[atnr, setAtnr] = useState("present");
    const[stnr, setStnr] = useState("present");
    const[tonicNeck, setTonicNeck] = useState("present");
    const[spinalGalant, setSpinalGalant] = useState("present");
    const[palmar, setPalmar] = useState("present");
    const[visualTracking,setVisualTracking]=useState("");
    const[visualSaccades,setVisualSaccades]=useState("");
    const[convergenceDivergence,setConvergenceDivergence] = useState("");
    const[frequencyOT,setFrequencyOT] = useState("");
    const[durationOT,setDurationOT] = useState("");
    const[goalOne,setGoalOne] = useState("");
    const[goalTwo,setGoalTwo] = useState("");
    const[goalThree,setGoalThree] = useState("");
    const[goalFour,setGoalFour] = useState("");
    const [therapistName, setTherapistName] = useState("");
    const [therapistSignature, setTherapistSignature] = useState("");

    const handleAssessmentMethod=()=>{
        console.log('click');
    }
    // const toggleFear=()=>{
    //     setFearParalysis(!fearParalysis);
    // }
  let edLevelOptions = [
    {
      value: "Less Than Elementary",
      label: "Less Than Elementary",
      ...({ disabled: false }),
    },
    {
      value: "Elementary",
      label: "Elementary",
      ...({ disabled: false }),
    },
    {
      value: "Middle",
      label: "Middle",
      ...( { disabled: false }),
    },
    {
        value: "Some High School",
        label: "Some High School",
        ...({ disabled: false }),
      },
      {
        value: "High School Diploma",
        label: "High School Diploma",
        ...({ disabled: false }),
      },
      {
        value: "Some College",
        label: "Associates",
        ...( { disabled: false }),
      },
      {
          value: "Associates",
          label: "Associates",
          ...( { disabled: false }),
        },
        {
          value: "Bachelors",
          label: "Bachelors",
          ...( { disabled: false }),
        },
        {
          value: "Graduate or above",
          label: "Graduate or above",
          ...( { disabled: false }),
        },
  ];
  let assessOptions = [
    {
        value: "Observation",
        label: "Observation",
        ...({ disabled: false }),
      },
      {
        value: "Interview",
        label: "Interview",
        ...({ disabled: false }),
      },
      {
        value: "Standardized Test",
        label: "Standardized Test",
        ...( { disabled: false }),
      },
  ];
  let behavioralOptions = [
    {
      value: "Option1",
      label: "Option1",
      ...({ disabled: false }),
    },
    {
      value: "Option2",
      label: "Option2",
      ...({ disabled: false }),
    },
    {
      value: "Option3",
      label: "Option3",
      ...( { disabled: false }),
    },
  ];
  let strengthROMOptions = [
    {
      value: "Option1",
      label: "Option1",
      ...({ disabled: false }),
    },
    {
      value: "Option2",
      label: "Option2",
      ...({ disabled: false }),
    },
    {
      value: "Option3",
      label: "Option3",
      ...( { disabled: false }),
    },
  ];
  let commStatusOptions = [
    {
      value: "Option1",
      label: "Option1",
      ...({ disabled: false }),
    },
    {
      value: "Option2",
      label: "Option2",
      ...({ disabled: false }),
    },
    {
      value: "Option3",
      label: "Option3",
      ...( { disabled: false }),
    },
  ];
  let adlOptions = [
    {
      value: "Option1",
      label: "Option1",
      ...({ disabled: false }),
    },
    {
      value: "Option2",
      label: "Option2",
      ...({ disabled: false }),
    },
    {
      value: "Option3",
      label: "Option3",
      ...( { disabled: false }),
    },
  ];
  let fineMotorOptions = [
    {
      value: "Raking",
      label: "Raking",
      ...({ disabled: false }),
    },
    {
      value: "Pincer",
      label: "Pincer",
      ...({ disabled: false }),
    },
    {
      value: "Grasping",
      label: "Grasping",
      ...( { disabled: false }),
    },
    {
        value: "Whole hand",
        label: "Whole hand",
        ...( { disabled: false }),
      },
      {
        value: "Uses a fisted grasp",
        label: "Uses a fisted grasp",
        ...( { disabled: false }),
      },
      {
        value: "Grasps writing tool with all fingertips on tool",
        label: "Grasps writing tool with all fingertips on tool",
        ...( { disabled: false }),
      },
  ];
  let frequencyOptions = [
    {
      value: "Twice a week",
      label: "Twice a week",
      ...({ disabled: false }),
    },
    {
      value: "Once a week",
      label: "Once a week",
      ...({ disabled: false }),
    },
    {
      value: "Every other week",
      label: "Every other week",
      ...( { disabled: false }),
    },
    {
        value: "Monthly",
        label: "Monthly",
        ...( { disabled: false }),
      },
      {
        value: "As needed",
        label: "As needed",
        ...( { disabled: false }),
      }
  ];
    return(
    <>
    <form  >
       <div className='content-wrapper'>
      <Navbar/>
      
<header id="clinicHeader">
    <h3 id="clinicHeading">Initial Occupational Therapy Evaluation</h3>
    </header>

    <div className="sideBySideTables">
        <div className="child">
            <table className="table table-striped">
                <tbody>
                <tr>
                    <td>Date of Eval:</td>
                    <td><input type="date" value={dateOfEval} onChange={(e)=>setDateOfEval(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Patient Name:</td>
                    <td><input type="text" value={patientName} onChange={(e)=>setPatientName(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Address:</td>
                    <td><input type="text"  value={address} onChange={(e)=>setAddress(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Parent/Guardian:</td>
                    <td><input type="text" value={parentName} onChange={(e)=>setParentName(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Diagnosis:</td>
                    <td><input type="text" value={diagnosis} onChange={(e)=>setDiagnosis(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Therapist:</td>
                    <td>
                        <select className="form-control" value={therapist} onChange={(e)=>setTherapist(e.target.value)}>
                            <option value="Kristi Warren" name="kristiTherapistClinic">Kristi Warren</option>
                            <option value="New Therapist" name="newTherapistClinic">New therapist </option>
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="child">
            <table className="table table-striped">
                <tbody>
                <tr>
                    <td>DOB:</td>
                    <td><input type="date"  value={DOB} onChange={(e)=>setDOB(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td><input type="text"  value={clientPhone} onChange={(e)=>setClientPhone(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Physician:</td>
                    <td><input type="text" value={physicianName} onChange={(e)=>setPhysicianName(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>Payer:</td>
                    <td>
                        <select className="form-control" value={payer} onChange={(e)=>setPayer(e.target.value)}>
                            <option value="Insurance" name="insuranceClinic" >Insurance</option>
                            <option value="Private Pay" name="privatePayClinic" >Private Pay</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>NPI:</td>
                    <td>1114051018</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
<div className="sectionHeaders">
    <h5 className="childSectionHeaders">REFERRAL INFORMATION/PARENT CONCERNS:</h5>
</div>
    <div className="sideBySideTables">
            <div className="child2">
                <textarea value={referral} id="textArea" name="form-control" rows="3" onChange={(e)=>setReferral(e.target.value)}></textarea>
            </div><br/>
    </div>
<div className="sectionHeaders">
    <h5 className="childSectionHeaders">MEDICAL AND DEVELOPMENTAL HISTORY:</h5>
</div>
    <div className="sideBySideTables">
        <div className="child2">
            <textarea value={medicalHistory} id="textArea" className="form-control" rows="3" onChange={(e)=>setMedicalHistory(e.target.value)}></textarea>
            </div><br/>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
<div className="sectionHeaders">
    <h5 className="childSectionHeaders">ASSESSMENT INFORMATION:</h5>
</div>
<div className="sideBySideTables">
    <div className="child">
        <table className="table table-striped">
            <tbody>
            <tr>
                <td>Assessment Method:</td>
                <td>
                <Select
                    className="dropdown"
                    placeholder="Select Method"
                    value={
                      assessmentMethod
                        ? assessOptions.filter((obj) =>
                            assessmentMethod.includes(obj.value)
                          )
                        : ""
                    }
                    options={assessOptions}
                    onChange={(e)=>setAssessmentMethod(e.target.value)}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
                </td>
            </tr>
            <tr>
                <td>Behavioral Observations:</td>
                <td>
                <Select
                    className="dropdown"
                    placeholder="Select Behaviors"
                    value={
                      behavioralObservations
                        ? behavioralOptions.filter((obj) =>
                            behavioralObservations.includes(obj.value)
                          )
                        : ""
                    }
                    options={behavioralOptions}
                    onChange={(e)=>setBehavioralObservations(e.target.value)}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
                </td>
            </tr>
            <tr>
                <td>Fine Motor Skills:</td>
                <td>
                <Select
                    className="dropdown"
                    placeholder="Select Fine Motor Skills"
                    value={
                      fineMotorSkills
                        ? fineMotorOptions.filter((obj) =>
                            fineMotorSkills.includes(obj.value)
                          )
                        : ""
                    }
                    options={fineMotorOptions}
                    onChange={(e)=>setFineMotorSkills(e.target.value)}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <div className="child">
        <table className="table table-striped">
            <tbody>
            <tr>
                <td>Communication Status:</td>
                <td>
                <Select
                    className="dropdown"
                    placeholder="Select Communication Status"
                    value={
                      communicationStatus
                        ? commStatusOptions.filter((obj) =>
                        communicationStatus.includes(obj.value)
                          )
                        : ""
                    }
                    options={commStatusOptions}
                    onChange={(e)=>setCommunicationStatus(e.target.value)}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
                    <br/>
                </td>
            </tr>
            <tr>
                <td>Education Level:</td>
                <td>
                <Select
                    className="dropdown"
                    placeholder="Select Education Level"
                    value={
                      educationLevel
                        ? edLevelOptions.filter((obj) =>
                        educationLevel.includes(obj.value)
                          )
                        : ""
                    }
                    options={edLevelOptions}
                    onChange={(e)=>setEducationLevel(e.target.value)}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
                    <br/>
                </td>
            </tr>
            <tr>
                <td>Strength/Range of Motion:</td>
                <td>
                   <Select
                    className="dropdown"
                    placeholder="Select Strength/ROM"
                    value={
                      strengthRangeMotion
                        ? strengthROMOptions.filter((obj) =>
                        strengthRangeMotion.includes(obj.value)
                          )
                        : ""
                    }
                    options={strengthROMOptions}
                    onChange={(e)=>setStrengthRangeMotion(e.target.value)}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
                    <br/>
                </td>
            </tr>
            <tr>
                 <td>Activities of Daily Living:</td>
                <td>
                <Select
                    className="dropdown"
                    placeholder="Select ADLs"
                    value={
                      activitiesDailyLiving
                        ? adlOptions.filter((obj) =>
                        activitiesDailyLiving.includes(obj.value)
                          )
                        : ""
                    }
                    options={adlOptions}
                    onChange={(e)=>setActivitiesDailyLiving(e.target.value)}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
                    <br/>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<div className="sectionHeaders">
    <h5 className="childSectionHeaders">NEUROMOTOR/PRIMITIVE REFLEXES:</h5>
</div>
<div className="sideBySideTables">
<div className="child2">
    <table className="table table-striped">
        <tbody>
            <tr>
                <td>
                Fear Paralysis Reflex
                </td>
                <td >
                    <input 
                        type="radio" 
                        id="switch_present" 
                        name="switchToggle"
                        value={fearParalysis}
                        checked={fearParalysis=="present"}
                        onChange={()=>{
                            setFearParalysis("present");
                          }}
                    />
                    Present
                    </td>
                    <td>
                <input 
                        type="radio" 
                        id="switch_present" 
                        name="switchToggle"
                        value={fearParalysis}
                        checked={fearParalysis=="integrated"}
                        onChange={()=>{
                            setFearParalysis("integrated");
                        }}
                    />
                    Integrated
            </td> 
            
        </tr>
        
        <tr>
            <td>Moro Reflex</td>
            <td >
                    <input 
                        type="radio" 
                        id="switch_present" 
                        name="switchToggle"
                        value={moro}
                        checked={moro=="present"}
                        onChange={()=>{
                            setMoro("present");
                          }}
                    />
                    Present
                    </td>
                    <td>
                <input 
                        type="radio" 
                        id="switch_present" 
                        name="switchToggle"
                        value={moro}
                        checked={moro=="integrated"}
                        onChange={()=>{
                            setMoro("integrated");
                        }}
                    />
                    Integrated
            </td> 
        </tr>
        <tr>
            <td>Asymmetrical Tonic Neck Reflex (ATNR)</td>
            <td >
                    <input 
                        type="radio" 
                        id="switch_present" 
                        name="switchToggle"
                        value={atnr}
                        checked={atnr=="present"}
                        onChange={()=>{
                            setAtnr("present");
                          }}
                    />
                    Present
                    </td>
                    <td>
                <input 
                        type="radio" 
                        id="switch_present" 
                        name="switchToggle"
                        value={atnr}
                        checked={atnr=="integrated"}
                        onChange={()=>{
                            setAtnr("integrated");
                        }}
                    />
                    Integrated
            </td> 
        </tr>
        <tr>
            <td>Symmetrical Tonic Neck Reflex (STNR)</td>
            <td >
                    <input 
                        type="radio" 
                        id="switch_present" 
                        name="switchToggle"
                        value={stnr}
                        checked={stnr=="present"}
                        onChange={()=>{
                            setStnr("present");
                          }}
                    />
                    Present
                    </td>
                    <td>
                <input 
                        type="radio" 
                        id="switch_present" 
                        name="switchToggle"
                        value={stnr}
                        checked={stnr=="integrated"}
                        onChange={()=>{
                            setStnr("integrated");
                        }}
                    />
                    Integrated
            </td> 
        </tr>
        <tr>
            <td>Tonic Neck Reflex</td>
            <td >
                    <input 
                        type="radio" 
                        id="switch_present" 
                        name="switchToggle"
                        value={tonicNeck}
                        checked={tonicNeck=="present"}
                        onChange={()=>{
                            setTonicNeck("present");
                          }}
                    />
                    Present
                    </td>
                    <td>
                <input 
                        type="radio" 
                        id="switch_present" 
                        name="switchToggle"
                        value={tonicNeck}
                        checked={tonicNeck=="integrated"}
                        onChange={()=>{
                            setTonicNeck("integrated");
                        }}
                    />
                    Integrated
            </td> 
        </tr>
        <tr>
            <td>Spinal Galant Reflex</td>
            <td >
                    <input 
                        type="radio" 
                        id="switch_present" 
                        name="switchToggle"
                        value={spinalGalant}
                        checked={spinalGalant=="present"}
                        onChange={()=>{
                            setSpinalGalant("present");
                          }}
                    />
                    Present
                    </td>
                    <td>
                <input 
                        type="radio" 
                        id="switch_present" 
                        name="switchToggle"
                        value={spinalGalant}
                        checked={spinalGalant=="integrated"}
                        onChange={()=>{
                            setSpinalGalant("integrated");
                        }}
                    />
                    Integrated
            </td> 
        </tr>
        <tr>
            <td>Palmar Reflex</td>
            <td >
                    <input 
                        type="radio" 
                        id="switch_present" 
                        name="switchToggle"
                        value={palmar}
                        checked={palmar=="present"}
                        onChange={()=>{
                            setPalmar("present");
                          }}
                    />
                    Present
                    </td>
                    <td>
                <input 
                        type="radio" 
                        id="switch_present" 
                        name="switchToggle"
                        value={palmar}
                        checked={palmar=="integrated"}
                        onChange={()=>{
                            setPalmar("integrated");
                        }}
                    />
                    Integrated
            </td> 
        </tr>
        </tbody>
    </table>
</div>
</div>

<div className="sectionHeaders">
    <h5 className="childSectionHeaders">VISUAL MOTOR/VISUAL PERCEPTION</h5>
    
</div>
<div className="sideBySideTables">
    <div className="child2">

        <h6 id="visualTracking">Visual Tracking:</h6>
        <textarea value={visualTracking} onChange={(event)=>setVisualTracking(event.target.value)} id="textArea" className="form-control" rows="3"></textarea>
    </div><br/>
</div>
<div className="sideBySideTables">
    <div className="child2">
        <h6 id="visualSaccades">Visual Saccades:</h6>
        <textarea value={visualSaccades} onChange={(event)=>setVisualSaccades(event.target.value)} id="textArea" className="form-control" rows="3"></textarea>
    </div>
</div>
<div className="sideBySideTables">
    <div className="child2">
        <h6 id="convergenceDivergence">Convergence/Divergence:</h6>
        <textarea value={convergenceDivergence} onChange={(event)=>setConvergenceDivergence(event.target.value)} id="textArea" className="form-control" rows="3"></textarea>
    </div>
</div>
<div className="sectionHeaders">
    <h5 className="childSectionHeaders">SUMMARY/PLAN:</h5>
</div>
<div className="sideBySideTables">
<div className="child2">
    <table className="table">
        <tbody>
        <tr>
            <td>Frequency of OT:</td>
            <td>
                   <Select
                    className="dropdown"
                    placeholder="Select Frequency"
                    value={
                      frequencyOT
                        ? frequencyOptions.filter((obj) =>
                        frequencyOT.includes(obj.value)
                          )
                        : ""
                    }
                    options={frequencyOptions}
                    onChange={handleAssessmentMethod}
                    isOptionDisabled={(option) => option.disabled}
                    required
                  />
                    <br/>
                </td>
        </tr>
        <tr>
            <td>Duration of OT:</td>
            <td>
                <select className="form-control" value={durationOT} onChange={(e)=>setDurationOT(e.target.value)}>
                    <option value="3 months">3 Months</option>
                    <option value="6 months">6 Months</option>
            </select>
            </td>
        </tr>
        </tbody>
    </table>
</div>
</div>
{/* //////////////////////////////////////////////////////////////////////////////// */}
<div className="sectionHeaders">
    <h5 className="childSectionHeaders">OCCUPATIONAL THERAPY GOALS:</h5>
</div>
<div className="sideBySideTables2">
    <div className="child2">
        <table className="table table-striped">
            <tbody>
            <tr>
                <td>1.</td>
                <td>
                    <input type="text" value={goalOne} onChange={(e)=>setGoalOne(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>2.</td>
                <td>
                <input type="text" value={goalTwo} onChange={(e)=>setGoalTwo(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>3.</td>
                <td>
                <input type="text" value={goalThree} onChange={(e)=>setGoalThree(e.target.value)} />
                </td>
            </tr>
            <tr>
                <td>4.</td>
                <td>
                <input type="text" value={goalFour} onChange={(e)=>setGoalFour(e.target.value)} />
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<div className="sideBySideTables">
    <div className="evaluatorName">
    <select className="form-control" value={therapistName} onChange={(e)=>setTherapistName(e.target.value)}>
                            <option value="Kristi Warren" name="kristiTherapistClinic">Kristi Warren</option>
                            <option value="New Therapist" name="newTherapistClinic">New therapist </option>
                        </select>
        <p className="h6">Evaluator Printed Name</p>
    </div><br/>
    <div className="evaluatorName">
    <select className="form-control" value={therapistSignature} onChange={(e)=>setTherapistSignature(e.target.value)}>
                            <option value="Kristi Warren" name="kristiTherapistClinic">Kristi Warren</option>
                            <option value="New Therapist" name="newTherapistClinic">New therapist </option>
                        </select>
        <p className="h6">Evaluator Signature</p>
    </div>
</div>
    <div className="form-group"></div>
    <input type="submit" value="Submit" className="btn btn-success"/>

    <div className="form-group"></div>
    <input type="reset" value="Reset" className="btn btn-success"/>


</form>
    </>
  )
    
}
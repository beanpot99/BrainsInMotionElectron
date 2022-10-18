import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Select from "react-select";
import Form from "react-bootstrap-form/lib/Form";
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
    const[fearParalysisPresent, setFearParalysisPresent] = useState(false);
    const[fearParalysisIntegrated, setFearParalysisIntegrated] = useState(false);
    const[moroPresent, setMoroPresent] = useState(false);
    const[moroIntegrated, setMoroIntegrated] = useState(false);
    const[atnrPresent, setAtnrPresent] = useState(false);
    const[atnrIntegrated, setAtnrIntegrated] = useState(false);
    const[stnrPresent, setStnrPresent] = useState(false);
    const[stnrIntegrated, setStnrIntegrated] = useState(false);
    const[tonicNeckPresent, setTonicNeckPresent] = useState(false);
    const[tonicNeckIntegrated, setTonicNeckIntegrated] = useState(false);
    const[spinalGalantPresent, setSpinalGalantPresent] = useState(false);
    const[spinalGalantIntegrated, setSpinalGalantIntegrated] = useState(false);
    const[palmarPresent, setPalmarPresent] = useState(false);
    const[palmarIntegrated, setPalmarIntegrated] = useState(false);
    const handleAssessmentMethod=()=>{
        console.log('click');
    }
    
  let edLevelOptions = [
    {
      value: "Less Than Elementary",
      label: "Less Than Elementary",
      ...({ disabled: true }),
    },
    {
      value: "Elementary",
      label: "Elementary",
      ...({ disabled: true }),
    },
    {
      value: "Middle",
      label: "Middle",
      ...( { disabled: true }),
    },
  ];
  let assessOptions = [
    {
      value: "Some High School",
      label: "Some High School",
      ...({ disabled: true }),
    },
    {
      value: "High School Diploma",
      label: "High School Diploma",
      ...({ disabled: true }),
    },
    {
      value: "Some College",
      label: "Associates",
      ...( { disabled: true }),
    },
    {
        value: "Associates",
        label: "Associates",
        ...( { disabled: true }),
      },
      {
        value: "Bachelors",
        label: "Bachelors",
        ...( { disabled: true }),
      },
      {
        value: "Graduate or above",
        label: "Graduate or above",
        ...( { disabled: true }),
      },
  ];
  let behavioralOptions = [
    {
      value: "Option1",
      label: "Option1",
      ...({ disabled: true }),
    },
    {
      value: "Option2",
      label: "Option2",
      ...({ disabled: true }),
    },
    {
      value: "Option3",
      label: "Option3",
      ...( { disabled: true }),
    },
  ];
  let strengthROMOptions = [
    {
      value: "Option1",
      label: "Option1",
      ...({ disabled: true }),
    },
    {
      value: "Option2",
      label: "Option2",
      ...({ disabled: true }),
    },
    {
      value: "Option3",
      label: "Option3",
      ...( { disabled: true }),
    },
  ];
  let commStatusOptions = [
    {
      value: "Option1",
      label: "Option1",
      ...({ disabled: true }),
    },
    {
      value: "Option2",
      label: "Option2",
      ...({ disabled: true }),
    },
    {
      value: "Option3",
      label: "Option3",
      ...( { disabled: true }),
    },
  ];
  let adlOptions = [
    {
      value: "Option1",
      label: "Option1",
      ...({ disabled: true }),
    },
    {
      value: "Option2",
      label: "Option2",
      ...({ disabled: true }),
    },
    {
      value: "Option3",
      label: "Option3",
      ...( { disabled: true }),
    },
  ];
  let fineMotorOptions = [
    {
      value: "Raking",
      label: "Raking",
      ...({ disabled: true }),
    },
    {
      value: "Pincer",
      label: "Pincer",
      ...({ disabled: true }),
    },
    {
      value: "Grasping",
      label: "Grasping",
      ...( { disabled: true }),
    },
    {
        value: "Whole hand",
        label: "Whole hand",
        ...( { disabled: true }),
      },
      {
        value: "Uses a fisted grasp",
        label: "Uses a fisted grasp",
        ...( { disabled: true }),
      },
      {
        value: "Grasps writing tool with all fingertips on tool",
        label: "Grasps writing tool with all fingertips on tool",
        ...( { disabled: true }),
      },
  ];
    return(
    <>
       <div className='content-wrapper'>
      <Navbar/>
      
<header id="clinicHeader">
    <h3 id="clinicHeading">Initial Occupational Therapy Evaluation</h3>
    </header>
<form  >
    <div class="sideBySideTables">
        <div class="child">
            <table class="table table-striped">
                <tbody>
                <tr>
                    <td>Date of Eval:</td>
                    <td><input type="date" value={dateOfEval} onChange={setDateOfEval}/></td>
                </tr>
                <tr>
                    <td>Patient Name:</td>
                    <td><input type="text" value={patientName} onChange={setPatientName}/></td>
                </tr>
                <tr>
                    <td>Address:</td>
                    <td><input type="text"  value={address} onChange={setAddress}/></td>
                </tr>
                <tr>
                    <td>Parent/Guardian:</td>
                    <td><input type="text" value={parentName} onChange={setParentName}/></td>
                </tr>
                <tr>
                    <td>Diagnosis:</td>
                    <td><input type="text" value={diagnosis} onChange={setDiagnosis}/></td>
                </tr>
                <tr>
                    <td>Therapist:</td>
                    <td>
                        <select class="form-control" value={therapist} onChange={setTherapist}>
                            <option value="Kristi Warren" name="kristiTherapistClinic">Kristi Warren</option>
                            <option value="New Therapist" name="newTherapistClinic">New therapist </option>
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="child">
            <table class="table table-striped">
                <tbody>
                <tr>
                    <td>DOB:</td>
                    <td><input type="date"  value={DOB} onChange={setDOB}/></td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td><input type="text"  value={clientPhone} onChange={setClientPhone}/></td>
                </tr>
                <tr>
                    <td>Physician:</td>
                    <td><input type="text" value={physicianName} onChange={setPhysicianName}/></td>
                </tr>
                <tr>
                    <td>Payer:</td>
                    <td>
                        <select class="form-control" value={payer} onChange={setPayer}>
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
<div class="sectionHeaders">
    <h5 class="childSectionHeaders">REFERRAL INFORMATION/PARENT CONCERNS:</h5>
</div>
    <div class="sideBySideTables">
            <div class="child2">
                <textarea value={referral} id="textArea" class="form-control" rows="3" onChange={setReferral}></textarea>
            </div><br/>
    </div>
<div class="sectionHeaders">
    <h5 class="childSectionHeaders">MEDICAL AND DEVELOPMENTAL HISTORY:</h5>
</div>
    <div class="sideBySideTables">
        <div class="child2">
            <textarea value={medicalHistory} id="textArea" class="form-control" rows="3" onChange={setMedicalHistory}></textarea>
            </div><br/>
        </div>
    </form></div>
    <br/>
    <br/>
    <br/>
<div class="sectionHeaders">
    <h5 class="childSectionHeaders">ASSESSMENT INFORMATION:</h5>
</div>
<div class="sideBySideTables">
    <div class="child">
        <table class="table table-striped">
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
                    onChange={handleAssessmentMethod}
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
                    onChange={handleAssessmentMethod}
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
                    onChange={handleAssessmentMethod}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class="child">
        <table class="table table-striped">
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
                    onChange={handleAssessmentMethod}
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
                    onChange={handleAssessmentMethod}
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
                    onChange={handleAssessmentMethod}
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
                    onChange={handleAssessmentMethod}
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
<div class="sectionHeaders">
    <h5 class="childSectionHeaders">NEUROMOTOR/PRIMITIVE REFLEXES:</h5>
</div>
<div class="sideBySideTables">
<div class="child2">
    <table class="table table-striped">
        <tbody>
            <tr>
                <td>
                Fear Paralysis Reflex
                </td>
                <td >
                <input 
                    type="checkbox" 
                    id="present" 
                    name="present"
                    value="Present"
                    checked={fearParalysisPresent}
                    onClick={(e)=>setFearParalysisPresent(e.target.value)}
                    />
                <label for="present" >Present</label>
                </td>
                <td >
                <input 
                    type="checkbox" 
                    id="present" 
                    name="present"
                    value="Present"
                    checked={fearParalysisIntegrated}
                    onChange={(e)=>setFearParalysisIntegrated(e.target.value)}
                    />
                <label for="integrated" >Integrated</label>
            </td> 
            
        </tr>
        
        <tr>
            <td>Moro Reflex</td>
            <td >
                <input 
                    type="checkbox" 
                    id="present" 
                    name="present"
                    value="Present"
                    checked={moroPresent}
                    onChange={(e)=>setMoroPresent(e.target.value)}
                    />
                <label for="present" >Present</label>
                </td>
                <td >
                <input 
                    type="checkbox" 
                    id="present" 
                    name="present"
                    value="Present"
                    checked={moroIntegrated}
                    onChange={(e)=>setMoroIntegrated(e.target.value)}
                    />
                <label for="integrated" >Integrated</label>
            </td> 
        </tr>
        <tr>
            <td>Asymmetrical Tonic Neck Reflex (ATNR)</td>
            <td >
                <input 
                    type="checkbox" 
                    id="present" 
                    name="present"
                    value="Present"
                    checked={atnrPresent}
                    onChange={(e)=>setAtnrPresent(e.target.value)}
                    />
                <label for="present" >Present</label>
                </td>
                <td >
                <input 
                    type="checkbox" 
                    id="present" 
                    name="present"
                    value="Present"
                    checked={atnrIntegrated}
                    onChange={(e)=>setAtnrIntegrated(e.target.value)}
                    />
                <label for="integrated" >Integrated</label>
            </td> 
        </tr>
        <tr>
            <td>Symmetrical Tonic Neck Reflex (STNR)</td>
            <td >
                <input 
                    type="checkbox" 
                    id="present" 
                    name="present"
                    value="Present"
                    checked={stnrPresent}
                    onChange={(e)=>setStnrPresent(e.target.value)}
                    />
                <label for="present" >Present</label>
                </td>
                <td >
                <input 
                    type="checkbox" 
                    id="present" 
                    name="present"
                    value="Present"
                    checked={stnrIntegrated}
                    onChange={(e)=>setStnrIntegrated(e.target.value)}
                    />
                <label for="integrated" >Integrated</label>
            </td> 
        </tr>
        <tr>
            <td>Tonic Neck Reflex</td>
            <td >
                <input 
                    type="checkbox" 
                    id="present" 
                    name="present"
                    value="Present"
                    checked={tonicNeckPresent}
                    onChange={(e)=>setTonicNeckPresent(e.target.value)}
                    />
                <label for="present" >Present</label>
                </td>
                <td >
                <input 
                    type="checkbox" 
                    id="present" 
                    name="present"
                    value="Present"
                    checked={tonicNeckIntegrated}
                    onChange={(e)=>setTonicNeckIntegrated(e.target.value)}
                    />
                <label for="integrated" >Integrated</label>
            </td> 
        </tr>
        <tr>
            <td>Spinal Galant Reflex</td>
            <td >
                <input 
                    type="checkbox" 
                    id="present" 
                    name="present"
                    value="Present"
                    checked={spinalGalantPresent}
                    onChange={(e)=>setSpinalGalantPresent(e.target.value)}
                    />
                <label for="present" >Present</label>
                </td>
                <td >
                <input 
                    type="checkbox" 
                    id="present" 
                    name="present"
                    value="Present"
                    checked={spinalGalantIntegrated}
                    onChange={(e)=>setSpinalGalantIntegrated(e.target.value)}
                    />
                <label for="integrated" >Integrated</label>
            </td> 
        </tr>
        <tr>
            <td>Palmar Reflex</td>
            <td >
                <input 
                    type="checkbox" 
                    id="present" 
                    name="present"
                    value="Present"
                    checked={palmarPresent}
                    onChange={(e)=>setPalmarPresent(e.target.value)}
                    />
                <label for="present" >Present</label>
                </td>
                <td >
                <input 
                    type="checkbox" 
                    id="present" 
                    name="present"
                    value="Present"
                    checked={palmarIntegrated}
                    onChange={(e)=>setPalmarIntegrated(e.target.value)}
                    />
                <label for="integrated" >Integrated</label>
            </td> 
        </tr>
        </tbody>
    </table>
</div>
</div>

{/* <div class="sectionHeaders">
    <h5 class="childSectionHeaders">VISUAL MOTOR/VISUAL PERCEPTION</h5>
</div>
<div class="sideBySideTables">
    <div class="child2">

        <h6 id="visualTracking">Visual Tracking:</h6>
        <textarea th:field="*{visualTracking}" id="textArea" class="form-control" rows="3"></textarea>
    </div><br>
</div>
<div class="sideBySideTables">
    <div class="child2">
        <h6 id="visualSaccades">Visual Saccades:</h6>
        <textarea th:field="*{visualSaccades}" id="textArea" class="form-control" rows="3"></textarea>
    </div>
</div>
<div class="sideBySideTables">
    <div class="child2">
        <h6 id="convergenceDivergence">Convergence/Divergence:</h6>
        <textarea th:field="*{convergenceDivergence}" id="textArea" class="form-control" rows="3"></textarea>
    </div>
</div>
<div class="sectionHeaders">
    <h5 class="childSectionHeaders">SUMMARY/PLAN:</h5>
</div>
<div class="sideBySideTables">
<div class="child2">
    <table class="table">
        <tr>
            <td>Frequency of OT:</td>
            <td>
                <select th:field="*{frequencyOfOT}">
                    <option value="Twice a week">Twice a week</option>
                    <option value="Once a week">Once a week</option>
                    <option value="Every other week">Every other week</option>
                    <option value="Monthly">Monthly</option>
                    <option value="As needed">As needed</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>Duration of OT:</td>
            <td>
                <select th:field="*{durationOfOT}">
                    <option value="3 months">3 Months</option>
                    <option value="6 months">6 Months</option>
            </select>
            </td>
        </tr>
    </table>
</div>
</div>
<div class="sectionHeaders">
    <h5 class="childSectionHeaders">OCCUPATIONAL THERAPY GOALS:</h5>
</div>
<div class="sideBySideTables2">
    <div class="child2">
        <table class="table table-striped">
            <tr>
                <td>1.</td>
                <td>
                    <input type="text" style="width:100%" th:field="*{goalOne}">
                </td>
            </tr>
            <tr>
                <td>2.</td>
                <td>
                    <input type="text" style="width:100%" th:field="*{goalTwo}">
                </td>
            </tr>
            <tr>
                <td>3.</td>
                <td>
                    <input type="text" style="width:100%" th:field="*{goalThree}">
                </td>
            </tr>
            <tr>
                <td>4.</td>
                <td>
                    <input type="text" style="width:100%" th:field="*{goalFour}">
                </td>
            </tr>
        </table>
    </div>
</div>
<div class="sideBySideTables">
    <div class="evaluatorName">
        <select class="form-control" th:field="*{therapist}" id="evaluatorSelect">
            <option th:each="therapist : ${allTherapists}" th:field="*{therapist}" th:text="${therapist.key}" th:value="${therapist.key}"></option>
        </select><br>
        <p class="h6">Evaluator Printed Name</p>
    </div>
    <div class="evaluatorName">
        <select class="evaluatorSelect">
            <option >Signature to be determined later  </option>
        </select><br>
        <p class="h6">Evaluator Signature</p>
    </div>
</div>
    <div class="form-group"></div>
    <input type="submit" value="Submit" class="btn btn-success">

    <div class="form-group"></div>
    <input type="reset" value="Reset" class="btn btn-success"> */}


    {/* </div> */}
    </>
  )
    
}